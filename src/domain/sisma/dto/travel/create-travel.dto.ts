import { IsArray, IsDateString, IsNumber, IsString, ValidateNested } from 'class-validator';
import { CreateSupplyDTO } from './create-supply.dto';
import { Type } from 'class-transformer';

export class CreateTravelDTO {
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
    totalDailyExpenses: number;

    @IsNumber()
    cargoValue: number;

    @IsNumber()
    cargoWeight: number;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateSupplyDTO)
    supplies?: CreateSupplyDTO[];
}
