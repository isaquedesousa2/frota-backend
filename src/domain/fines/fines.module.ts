import { Module } from '@nestjs/common';
import { FinesService } from './fines.service';
import { FinesController } from './fines.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripsEntity } from './entities/trips.entity';
import { EquipamentEntity } from './entities/equipament.entity';

@Module({
    imports: [TypeOrmModule.forFeature([TripsEntity, EquipamentEntity])],
    providers: [FinesService],
    controllers: [FinesController],
})
export class FinesModule {}
