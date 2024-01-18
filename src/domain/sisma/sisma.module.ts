import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipamentEntity } from './entities/equipament.entity';
import { MaintenanceItemEntity } from './entities/maintenance-item.entity';
import { MaintenanceEntity } from './entities/maintenance.entity';
import { MaintenancePointEntity } from './entities/maintenance-point.entity';
import { PumpHistoryEntity } from './entities/pump-history.entity';
import { RouteEntity } from './entities/route.entity';
import { SupplyEntity } from './entities/supply.entity';
import { TravelEntity } from './entities/travel.entity';
import { WorkplaceEntity } from './entities/workplace.entity';
import { SismaService } from './sisma.service';
import { SismaController } from './sisma.controller';
import { EmployeeEntity } from './entities/employee.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            EquipamentEntity,
            MaintenanceItemEntity,
            MaintenanceEntity,
            MaintenancePointEntity,
            PumpHistoryEntity,
            RouteEntity,
            SupplyEntity,
            TravelEntity,
            WorkplaceEntity,
            EmployeeEntity,
        ]),
    ],
    providers: [SismaService],
    controllers: [SismaController],
})
export class SismaModule {}
