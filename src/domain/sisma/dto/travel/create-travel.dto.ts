import { Type } from 'class-transformer';
import { IsDateString, IsNumber, IsString } from 'class-validator';
import { CreateSupplyDTO } from '.';
import { CreateChecklistFormDTO } from '../../../checklist/dto';

export class CreateTravelDTO extends CreateChecklistFormDTO {
    @IsString()
    route: string;

    @IsNumber()
    vehicleCode: number;

    @IsString()
    driver: string;

    @IsString()
    deliveryMan: string;

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
}
