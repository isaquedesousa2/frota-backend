import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { EmployeeSismaEntity, EquipamentSismaEntity, TripsSismaEntity } from '../../domain/fines/entities';
import { RoutesSismaEntity } from '../../domain/fines/entities/routes-sisma.entity';
import { ClassEquipamentSismaEntity } from '../../domain/fines/entities/class-equipament-sisma.entity';
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
    UserSectorEntity,
    WorkplaceEntity,
} from '../../domain/sisma/entities';
import { PermissionEntity, UserEntity, UsersPermissionsEntity } from '../../domain/users/entities';
import { ChecklistFormEntity, ChecklistSupplyEntity, ChecklistHistoryEntity, ChecklistProcessEntity } from '../../domain/checklist/entities';

dotenv.config();

export const typeOrmDataSourceWinthorOptions: DataSourceOptions = {
    type: 'oracle',
    host: process.env.WINTHOR_HOST,
    port: parseInt(process.env.WINTHOR_PORT),
    username: process.env.WINTHOR_USERNAME,
    password: process.env.WINTHOR_PASSWORD,
    serviceName: process.env.WINTHOR_SERVICE,
    schema: process.env.WINTHOR_SCHEMA,
    entities: [
        EquipamentSismaEntity,
        TripsSismaEntity,
        EmployeeSismaEntity,
        RoutesSismaEntity,
        ClassEquipamentSismaEntity,
        EquipamentEntity,
        MaintenanceEntity,
        MaintenanceItemEntity,
        MaintenancePointEntity,
        PumpHistoryEntity,
        RouteEntity,
        SupplyEntity,
        TravelEntity,
        UserSectorEntity,
        WorkplaceEntity,
        EmployeeEntity,
    ],
    synchronize: false,
};

export const typeormDataSourceFROTAOptions: DataSourceOptions = {
    name: process.env.FROTA_NAME,
    type: process.env.FROTA_TYPE as any,
    host: process.env.FROTA_HOST,
    port: parseInt(process.env.FROTA_PORT),
    username: process.env.FROTA_USERNAME,
    password: process.env.FROTA_PASSWORD,
    database: process.env.FROTA_DATABASE,
    schema: process.env.FROTA_SCHEMA,
    entities: [
        UserEntity,
        UsersPermissionsEntity,
        PermissionEntity,
        ChecklistFormEntity,
        ChecklistSupplyEntity,
        ChecklistProcessEntity,
        ChecklistHistoryEntity,
    ],
    synchronize: false,
};

export const typeOrmDataSourceFROTA = new DataSource(typeormDataSourceFROTAOptions);

export const typeOrmDataSourceWinthor = new DataSource(typeOrmDataSourceWinthorOptions);
