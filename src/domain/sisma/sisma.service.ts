import { InjectRepository } from '@nestjs/typeorm';
import { ISismaService } from './interfaces';
import { CreateTravelDTO } from './dto/travel';
import { typeOrmDataSourceWinthor } from '../../infra/typeorm/data-source';
import { createSupply, createTravel } from './utils/travel';
import {
    EmployeeEntity,
    EquipamentEntity,
    MaintenanceEntity,
    MaintenanceItemEntity,
    MaintenancePointEntity,
    PumpHistoryEntity,
    RouteEntity,
    SupplyEntity,
    TravelEntity,
    WorkplaceEntity,
} from './entities';
import { Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class SismaService implements ISismaService {
    constructor(
        @InjectRepository(TravelEntity) private readonly travelRepository: Repository<TravelEntity>,
        @InjectRepository(MaintenanceEntity) private readonly maintenaceRepository: Repository<MaintenanceEntity>,
        @InjectRepository(MaintenanceItemEntity) private readonly maintenaceItemRepository: Repository<MaintenanceItemEntity>,
        @InjectRepository(MaintenancePointEntity) private readonly maintenacePointRepository: Repository<MaintenancePointEntity>,
        @InjectRepository(RouteEntity) private readonly routeRepository: Repository<RouteEntity>,
        @InjectRepository(EmployeeEntity) private readonly employeeRepository: Repository<EmployeeEntity>,
        @InjectRepository(EquipamentEntity) private readonly equipamentRepository: Repository<EquipamentEntity>,
        @InjectRepository(PumpHistoryEntity) private readonly pumpHistoryRepository: Repository<PumpHistoryEntity>,
        @InjectRepository(SupplyEntity) private readonly supplyRepository: Repository<SupplyEntity>,
        @InjectRepository(WorkplaceEntity) private readonly workplaceRepository: Repository<WorkplaceEntity>,
    ) {}

    async createTravel(data: CreateTravelDTO) {
        return await typeOrmDataSourceWinthor.transaction(async (transaction) => {
            try {
                const travel = await createTravel(
                    {
                        travel: this.travelRepository,
                        maintenance: this.maintenaceRepository,
                        route: this.routeRepository,
                        employee: this.employeeRepository,
                        equipament: this.equipamentRepository,
                    },
                    data,
                );

                await transaction.save(TravelEntity, travel);

                for (const item of data.supplies) {
                    const { maintenance, maintenanceItem, pumpHistory, supply } = await createSupply(
                        {
                            maintenance: this.maintenaceRepository,
                            maintenanceItem: this.maintenaceItemRepository,
                            maintenancePoint: this.maintenacePointRepository,
                            pumpHistory: this.pumpHistoryRepository,
                            supply: this.supplyRepository,
                            workplace: this.workplaceRepository,
                        },
                        {
                            coupunCode: +travel.NUMEDOCU,
                            driverCode: travel.CODIFUNC,
                            equipamentCode: travel.IDEQUI,
                            materialCode: travel.materialCode,
                            supply: item,
                            travel: data,
                        },
                    );

                    await transaction.save(MaintenanceEntity, maintenance);
                    await transaction.save(MaintenanceItemEntity, maintenanceItem);
                    await transaction.save(PumpHistoryEntity, pumpHistory);
                    await transaction.save(SupplyEntity, supply);
                }

                return { coupunCode: +travel.NUMEDOCU };
            } catch (error) {
                throw new BadRequestException(error);
            }
        });
    }
}