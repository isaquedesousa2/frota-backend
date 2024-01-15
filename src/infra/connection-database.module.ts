import 'dotenv/config';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../domain/users/entities/user.entity';
import { EquipamentEntity } from '../domain/fines/entities/equipament.entity';
import { TripsEntity } from '../domain/fines/entities/trips.entity';
import { EmployeeEntity } from '../domain/fines/entities/employee.entity';
import { RoutesEntity } from '../domain/fines/entities/routes.entity';
import { ClassEquipamentEntity } from '../domain/fines/entities/class-equipament.entity';
import { UsersPermissionsEntity } from '../domain/users/entities/users-permissions.entity';
import { PermissionEntity } from '../domain/users/entities/permission.entity';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'oracle',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            serviceName: process.env.DB_SERVICE,
            schema: process.env.DB_SCHEMA,
            entities: [EquipamentEntity, TripsEntity, EmployeeEntity, RoutesEntity, ClassEquipamentEntity],
            synchronize: false,
        }),
        TypeOrmModule.forRoot({
            name: process.env.FROTA_NAME,
            type: process.env.FROTA_TYPE as any,
            host: process.env.FROTA_HOST,
            port: parseInt(process.env.FROTA_PORT),
            username: process.env.FROTA_USERNAME,
            password: process.env.FROTA_PASSWORD,
            database: process.env.FROTA_DATABASE,
            schema: process.env.FROTA_SCHEMA,
            entities: [UserEntity, UsersPermissionsEntity, PermissionEntity],
            synchronize: false,
        }),
    ],
})
export class ConnectionDatabaseModule {}
