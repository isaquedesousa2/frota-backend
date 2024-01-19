import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChecklistService } from './checklist.service';
import { CheckListController } from './checklist.controller';
import { ChecklistFormEntity, ChecklistHistoryEntity, ChecklistProcessEntity, ChecklistSupplyEntity } from './entities';

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [ChecklistProcessEntity, ChecklistHistoryEntity, ChecklistFormEntity, ChecklistSupplyEntity],
            process.env.FROTA_NAME,
        ),
    ],
    providers: [ChecklistService],
    controllers: [CheckListController],
    exports: [ChecklistService],
})
export class ChecklistModule {}
