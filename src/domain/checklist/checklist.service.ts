import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { ChecklistFormEntity, ChecklistHistoryEntity, ChecklistProcessEntity } from './entities';
import { DataSource, Raw, Repository } from 'typeorm';
import { ICreateCheckListHistoryReq, ICreateChecklistProcessReq } from './interfaces';
import { ECheckListProcessStatus } from './enums';
import { IPaginationDTO } from '../../shared/pagination/paginate.interface';
import { getPaginationParams, paginateResponse } from '../../shared/pagination/pagination.helper';
import {
    mapCreateChecklistForm,
    mapCreateChecklistHistory,
    mapCreateChecklistProcess,
    mapCreateChecklistSupply,
    mapShowChecklistProcess,
} from './transformers';
import { CreateChecklistFormDTO } from './dto';
import { IChecklistFilters } from './interfaces/checklist-filters.interface';
import { format, subDays } from 'date-fns';

@Injectable()
export class ChecklistService {
    constructor(
        @InjectRepository(ChecklistProcessEntity, process.env.FROTA_NAME)
        private readonly checklistProcessRepository: Repository<ChecklistProcessEntity>,
        @InjectRepository(ChecklistFormEntity, process.env.FROTA_NAME)
        private readonly checklistFormRepository: Repository<ChecklistFormEntity>,
        @InjectRepository(ChecklistHistoryEntity, process.env.FROTA_NAME)
        private readonly checklistHistoricRepository: Repository<ChecklistHistoryEntity>,
        @InjectDataSource(process.env.FROTA_NAME) private readonly dataSource: DataSource,
    ) {}

    async createProcess({ fluigCode }: ICreateChecklistProcessReq) {
        const process = mapCreateChecklistProcess({ fluigCode });

        await this.checklistProcessRepository.save(process);
    }

    async createForm(history: ICreateCheckListHistoryReq, form: CreateChecklistFormDTO) {
        await this.dataSource.transaction(async (transaction) => {
            const process = await transaction.findOne(ChecklistProcessEntity, { where: { fluigCode: form.fluigCode } });

            const formData = mapCreateChecklistForm(process.id, form);

            const { id: formId } = await transaction.save(formData);

            for (const supply of form.supplies) {
                const supplyData = mapCreateChecklistSupply(formId, supply);

                await transaction.save(supplyData);
            }

            const historyData = mapCreateChecklistHistory(process.id, formId, history);

            await transaction.save(historyData);

            if (historyData.status) {
                await transaction.update(
                    ChecklistProcessEntity,
                    { id: process.id },
                    {
                        chargingCode: formData.chargingCode,
                        status: ECheckListProcessStatus.OPEN,
                        endDate: new Date(),
                    },
                );
            }
        });
    }

    async findAll({ period }: IChecklistFilters, { page, perPage }: IPaginationDTO) {
        const [process, count] = await this.checklistProcessRepository.findAndCount({
            ...getPaginationParams(page, perPage),
            relations: ['forms', 'forms.supplies', 'histories'],
            order: {
                createdAt: 'DESC',
            },
        });

        const paginatedResponse = paginateResponse(process, count, page, perPage);

        return {
            ...paginatedResponse,
            result: process.map(mapShowChecklistProcess),
        };
    }

    async findAllHistoric({ period }: IChecklistFilters, { page, perPage }: IPaginationDTO) {
        let startDate: Date;
        const endDate = new Date();

        if (period) {
            startDate = subDays(endDate, period);
        }

        const [historic, count] = await this.checklistHistoricRepository.findAndCount({
            ...getPaginationParams(page, perPage),
            relations: ['process'],
            order: {
                createdAt: 'DESC',
            },
            where: {
                createdAt: period && Raw((alias) => `${alias} >= :startDate  and ${alias} <= :endDate`, { startDate, endDate }),
            },
        });

        const paginatedResponse = paginateResponse(historic, count, page, perPage);

        return {
            ...paginatedResponse,
            result: historic,
        };
    }

    async showForm(id: number) {
        const response = await this.checklistFormRepository.findOne({ where: { id }, relations: ['supplies'] });

        return response;
    }
}
