import { BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { ICreateSupply, ICreateSupplyRepositories } from '../../interfaces';
import { mapCreateMaintenace, mapCreateMaintenaceItem, mapCreatePumpHistory, mapCreateSupply } from '../../transformers';
import { MaintenanceEntity, MaintenancePointEntity, WorkplaceEntity } from '../../entities';
import { Repository } from 'typeorm';

export const createSupply = async (repositories: ICreateSupplyRepositories, data: ICreateSupply) => {
    const gasStationCode = await getGasStationCode(repositories.maintenancePoint, data.supply.gasStation);
    const workplaceCode = await getWorkplaceCode(repositories.workplace, data.supply.workplace);
    const maintenanceCode = await getMaintenanceCode(repositories.maintenance);
    const supplyCoupunCode = await getCoupunCode(repositories.maintenance);

    if (!supplyCoupunCode) {
        throw new InternalServerErrorException('Falha ao buscar o código da viagem.');
    }

    if (!maintenanceCode) {
        throw new InternalServerErrorException('Falha ao buscar o código da manutenção.');
    }

    if (!gasStationCode) {
        throw new BadRequestException('Posto não encontrado.');
    }

    if (!workplaceCode) {
        throw new BadRequestException('Local de trabalho não encontrado.');
    }

    const values = {
        supplyCoupunCode,
        maintenanceCode,
        gasStationCode,
        workplaceCode,
        ...data,
    };

    const maintenance = mapCreateMaintenace(values);

    const maintenanceItem = mapCreateMaintenaceItem(values);

    const pumpHistory = mapCreatePumpHistory(values);

    const supply = mapCreateSupply(values);

    return {
        maintenance,
        maintenanceItem,
        pumpHistory,
        supply,
    };
};

const getMaintenanceCode = async (repository: Repository<MaintenanceEntity>) => {
    const response = await repository.createQueryBuilder('travel').select('MAX(travel.IDMANUT)', 'code').getRawOne();

    return response?.code + 1 || null;
};

const getCoupunCode = async (repository: Repository<MaintenanceEntity>) => {
    const response = await repository
        .createQueryBuilder('travel')
        .select('MAX(travel.NUMEDOCU)', 'code')
        .where("travel.TIPODOCU = 'MB'")
        .andWhere('travel.NUMEDOCU <= 90000000')
        .getRawOne();

    return response?.code + 1 || null;
};

const getWorkplaceCode = async (repository: Repository<WorkplaceEntity>, name: string) => {
    const response = await repository.findOne({
        where: {
            DESCRICAO: name,
        },
    });

    return response?.CODILOTR || null;
};

const getGasStationCode = async (repository: Repository<MaintenancePointEntity>, name: string) => {
    const response = await repository.findOne({
        where: {
            PONTOABAST: '1',
            DESCRRESUM: name,
        },
    });

    return response?.CODIPOMA || null;
};
