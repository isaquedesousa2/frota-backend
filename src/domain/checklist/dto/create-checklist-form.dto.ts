import { IsBoolean, IsString, IsNumber, IsDateString, IsDecimal, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { CreateChecklistSupplyDTO } from './create-checklist-supply.dto';
import { Type } from 'class-transformer';

export class CreateChecklistFormDTO {
    @IsNumber()
    fluigCode: number;

    @IsNumber()
    vehicleCode1: number;

    @IsString()
    vehicleDescription1: string;

    @IsString()
    vehicleClass1: string;

    @IsString()
    vehiclePlate1: string;

    @IsNumber()
    initialOdometer1: number;

    @IsNumber()
    initialHorimeter1: number;

    @IsOptional()
    @IsNumber()
    vehicleCode2: number;

    @IsString()
    vehicleDescription2: string;

    @IsString()
    vehicleClass2: string;

    @IsString()
    vehiclePlate2: string;

    @IsOptional()
    @IsNumber()
    initialOdometer2: number;

    @IsOptional()
    @IsNumber()
    initialHorimeter2: number;

    @IsNumber()
    chargingCode: number;

    @IsDateString()
    startDate: Date;

    @IsDateString()
    expectedDate: Date;

    @IsDateString()
    endDate: Date;

    @IsString()
    driver: string;

    @IsString()
    deliveryMan: string;

    @IsNumber()
    quantityDeliveries: number;

    @IsDecimal()
    cargoValue: number;

    @IsDecimal()
    cargoWeight: number;

    @IsDecimal()
    dailyValue: number;

    @IsDecimal()
    totalDailyExpenses: number;

    @IsString()
    route: string;

    @IsString()
    overflows: string;

    @IsBoolean()
    enRouteSupply: boolean;

    @IsNumber()
    finalOdometer: number;

    @IsNumber()
    finalHorimeter: number;

    @IsString()
    observationsDriver: string;

    @IsString()
    observationsYardAssistantLeader: string;

    @IsString()
    observationsFleetAssistant: string;

    @IsBoolean()
    truckApproved: boolean;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateChecklistSupplyDTO)
    supplies?: CreateChecklistSupplyDTO[];
}
