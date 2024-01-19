import 'dotenv/config';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmDataSourceWinthor, typeOrmDataSourceWinthorOptions, typeormDataSourceFROTAOptions } from './typeorm/data-source';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: async () => {
                await typeOrmDataSourceWinthor.initialize();

                return typeOrmDataSourceWinthorOptions;
            },
        }),
        TypeOrmModule.forRoot(typeormDataSourceFROTAOptions),
    ],
})
export class ConnectionDatabaseModule {}
