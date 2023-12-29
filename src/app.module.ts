import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { FinesModule } from './domain/fines/fines.module';
import { ConnectionDatabaseModule } from './infra/connection-database.module';
import { AuthModule } from './domain/auth/auth.module';
import { UsersModule } from './domain/users/users.module';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        ConnectionDatabaseModule,
        AuthModule,
        UsersModule,
        FinesModule,
    ],
    controllers: [],
    providers: [JwtAuthGuard],
})
export class AppModule {}
