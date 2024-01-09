import { Module } from '@nestjs/common';
import { UserEntity } from '../users/entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity], process.env.SGM_NAME)],
    providers: [AdminService],
    controllers: [AdminController],
})
export class AdminModule {}
