import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../domain/users/entities/user.entity';
import { EquipamentSismaEntity } from '../domain/fines/entities/equipament-sisma.entity';
import { TripsSismaEntity } from '../domain/fines/entities/trips-sisma.entity';
import { EmployeeSismaEntity } from '../domain/fines/entities/employee-sisma.entity';
import 'dotenv/config';
import { RoutesSismaEntity } from '../domain/fines/entities/routes-sisma.entity';
import { ClassEquipamentSismaEntity } from '../domain/fines/entities/class-equipament-sisma.entity';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'oracle',
            host: process.env.WINTHOR_HOST,
            port: parseInt(process.env.WINTHOR_PORT),
            username: process.env.WINTHOR_USERNAME,
            password: process.env.WINTHOR_PASSWORD,
            serviceName: process.env.WINTHOR_SERVICE,
            schema: process.env.WINTHOR_SCHEMA,
            entities: [EquipamentSismaEntity, TripsSismaEntity, EmployeeSismaEntity, RoutesSismaEntity, ClassEquipamentSismaEntity],
            synchronize: false,
        }),
        TypeOrmModule.forRoot({
            name: process.env.SGM_NAME,
            type: process.env.SGM_TYPE as any,
            host: process.env.SGM_HOST,
            port: parseInt(process.env.SGM_PORT),
            username: process.env.SGM_USERNAME,
            password: process.env.SGM_PASSWORD,
            database: process.env.SGM_DATABASE,
            schema: process.env.SGM_SCHEMA,
            entities: [UserEntity],
            synchronize: true,
        }),
    ],
})
export class ConnectionDatabaseModule {}
