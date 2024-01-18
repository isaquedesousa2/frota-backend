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

export const typeormDataSourceSGMOptions: DataSourceOptions = {
    name: process.env.SGM_NAME,
    type: process.env.SGM_TYPE as any,
    host: process.env.SGM_HOST,
    port: parseInt(process.env.SGM_PORT),
    username: process.env.SGM_USERNAME,
    password: process.env.SGM_PASSWORD,
    database: process.env.SGM_DATABASE,
    schema: process.env.SGM_SCHEMA,
    migrations: [`${__dirname}/migrations/*.ts`],
};

export const typeOrmDataSourceSGM = new DataSource(typeOrmDataSourceWinthorOptions);

export const typeOrmDataSourceWinthor = new DataSource(typeOrmDataSourceWinthorOptions);
