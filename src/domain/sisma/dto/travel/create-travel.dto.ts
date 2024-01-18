import { Type } from 'class-transformer';
import { IsDateString, IsNumber, IsString } from 'class-validator';
import { CreateSupplyDTO } from '.';

export class CreateTravelDTO {
    @IsString()
    nameRoute: string;

    @IsNumber()
    vehicleCode: number;

    @IsString()
    driverName: string;

    @IsString()
    deliveryManName: string;

    @IsDateString()
    startDate: Date;

    @IsDateString()
    expectedDate: Date;

    @IsDateString()
    endDate: Date;

    @IsString()
    observation: string;

    @IsNumber()
    quantityDeliveries: number;

    @IsNumber()
    initialOdometer: number;

    @IsNumber()
    finalOdometer: number;

    @IsNumber()
    horimeter: number;

    @IsNumber()
    valueSpentWithDiems: number;

    @IsNumber()
    cargoValue: number;

    @IsNumber()
    cargoWeight: number;

    @Type(() => CreateSupplyDTO)
    supplies: CreateSupplyDTO[];
}
