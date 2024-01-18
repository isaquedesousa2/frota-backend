export interface IMapCreateTravel {
    coupunCode: string;
    equipamentCode: number;
    driverCode: number;
    deliveryManCode: number;
    routeCode: string;
    startDate: Date;
    expectedDate: Date;
    endDate: Date;
    cargoValue: number;
    observation: string;
    quantityDeliveries: number;
    initialOdometer: number;
    finalOdometer: number;
    valueSpentWithDiems: number;
    cargoWeight: number;
}
