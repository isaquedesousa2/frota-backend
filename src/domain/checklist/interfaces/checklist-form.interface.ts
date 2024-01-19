export interface ICreateChecklistFormReq {
    fluigCode: number;
    vehicleCode1: number;
    vehicleDescription1: string;
    vehicleClass1: string;
    vehiclePlate1: string;
    initialOdometer1: number;
    initialHorimeter1: number;
    vehicleCode2: number;
    vehicleDescription2: string;
    vehicleClass2: string;
    vehiclePlate2: string;
    initialOdometer2: number;
    initialHorimeter2: number;
    chargingCode: number;
    startDate: Date;
    expectedDate: Date;
    endDate: Date;
    driver: string;
    deliveryMan: string;
    quantityDeliveries: number;
    cargoValue: number;
    cargoWeight: number;
    dailyValue: number;
    totalDailyExpenses: number;
    route: string;
    overflows: string;
    enRouteSupply: boolean;
    finalOdometer: number;
    finalHorimeter: number;
    observationsDriver: string;
    observationsYardAssistantLeader: string;
    observationsFleetAssistant: string;
    truckApproved: boolean;
}

export interface ICreateChecklistFormRes {
    processId: number;
    vehicleCode1: number;
    vehicleDescription1: string;
    vehicleClass1: string;
    vehiclePlate1: string;
    initialOdometer1: number;
    initialHorimeter1: number;
    vehicleCode2: number;
    vehicleDescription2: string;
    vehicleClass2: string;
    vehiclePlate2: string;
    initialOdometer2: number;
    initialHorimeter2: number;
    chargingCode: number;
    startDate: Date;
    expectedDate: Date;
    endDate: Date;
    driver: string;
    deliveryMan: string;
    quantityDeliveries: number;
    cargoValue: number;
    cargoWeight: number;
    dailyValue: number;
    totalDailyExpenses: number;
    route: string;
    overflows: string;
    enRouteSupply: boolean;
    finalOdometer: number;
    finalHorimeter: number;
    observationsDriver: string;
    observationsYardAssistantLeader: string;
    observationsFleetAssistant: string;
    truckApproved: boolean;
}
