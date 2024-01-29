import { IsBoolean, IsDecimal, IsEnum, IsNumber, IsString, IsDateString } from 'class-validator';
import { EChecklistSuppliesTypes } from '../enums';

export class CreateChecklistSupplyDTO {
    @IsEnum(EChecklistSuppliesTypes)
    type: EChecklistSuppliesTypes;

    @IsDateString()
    date: Date;

    @IsDecimal()
    liters: number;

    @IsDecimal()
    value: number;

    @IsDecimal()
    odometer: number;

    @IsString()
    gasStation: string;

    @IsString()
    workplace: string;

    @IsNumber()
    noteCode: number;

    @IsBoolean()
    completedTank: boolean;
}
