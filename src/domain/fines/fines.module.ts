import { Module } from '@nestjs/common';
import { FinesService } from './fines.service';
import { FinesController } from './fines.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripsSismaEntity } from './entities/trips-sisma.entity';
import { EquipamentSismaEntity } from './entities/equipament-sisma.entity';

@Module({
    imports: [TypeOrmModule.forFeature([TripsSismaEntity, EquipamentSismaEntity])],
    providers: [FinesService],
    controllers: [FinesController],
})
export class FinesModule {}
