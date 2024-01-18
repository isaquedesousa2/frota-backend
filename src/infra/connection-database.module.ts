import 'dotenv/config';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmDataSourceWinthor, typeOrmDataSourceWinthorOptions } from './typeorm/data-source';
import { PermissionEntity, UserEntity, UsersPermissionsEntity } from '../domain/users/entities';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: async () => {
                await typeOrmDataSourceWinthor.initialize();

                return typeOrmDataSourceWinthorOptions;
            },
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
            entities: [UserEntity, UsersPermissionsEntity, PermissionEntity],
            synchronize: false,
        }),
    ],
})
export class ConnectionDatabaseModule {}
