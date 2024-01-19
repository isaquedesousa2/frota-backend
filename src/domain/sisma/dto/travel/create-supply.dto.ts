import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateSupplyDTO {
    @IsNumber()
    noteCode: number;

    @IsString()
    gasStation: string;

    @IsDateString()
    date: Date;

    @IsNumber()
    km: number;

    @IsString()
    workplace: string;

    @IsNumber()
    liters: number;

    @IsNumber()
    value: number;

    @IsBoolean()
    completedTank: boolean;
}
