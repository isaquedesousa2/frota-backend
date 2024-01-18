import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateSupplyDTO {
    @IsNumber()
    noteNumber: number;

    @IsString()
    gasStationName: string;

    @IsDateString()
    date: Date;

    @IsNumber()
    odometer: number;

    @IsString()
    workplaceName: string;

    @IsNumber()
    liters: number;

    @IsNumber()
    value: number;

    @IsBoolean()
    completedTank: boolean;
}
