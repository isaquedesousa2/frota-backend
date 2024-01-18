import { Repository } from 'typeorm';
import { CreateTravelDTO, CreateSupplyDTO } from '../dto/travel';
import { MaintenancePointEntity } from '../entities/maintenance-point.entity';
import { WorkplaceEntity } from '../entities/workplace.entity';
import { MaintenanceEntity } from '../entities/maintenance.entity';
import { PumpHistoryEntity } from '../entities/pump-history.entity';
import { MaintenanceItemEntity } from '../entities/maintenance-item.entity';
import { SupplyEntity } from '../entities/supply.entity';

interface ISupplyDefaultValues {
    maintenanceCode: number;
    supplyCoupunCode: number;
    gasStationCode: number;
    workplaceCode: number;
    materialCode: number;
}

export interface ICreateSupply {
    coupunCode: number;
    equipamentCode: number;
    driverCode: number;
    materialCode: number;
    supply: CreateSupplyDTO;
    travel: CreateTravelDTO;
}

export interface IMapCreateSupply {
    coupunCode: number;
    maintenanceCode: number;
}

export interface ICreateSupplyRepositories {
    maintenancePoint: Repository<MaintenancePointEntity>;
    maintenanceItem: Repository<MaintenanceItemEntity>;
    maintenance: Repository<MaintenanceEntity>;
    workplace: Repository<WorkplaceEntity>;
    pumpHistory: Repository<PumpHistoryEntity>;
    supply: Repository<SupplyEntity>;
}

export interface IMapCreateSupplyMaintenance extends ISupplyDefaultValues {
    driverCode: number;
    equipamentCode: number;
    travel: CreateTravelDTO;
    supply: CreateSupplyDTO;
}

export interface IMapCreateSupplyMaintenanceItem extends ISupplyDefaultValues {
    equipamentCode: number;
    supply: CreateSupplyDTO;
}

export interface IMapCreateSupplyPumpHistory extends ISupplyDefaultValues {
    supply: CreateSupplyDTO;
}
