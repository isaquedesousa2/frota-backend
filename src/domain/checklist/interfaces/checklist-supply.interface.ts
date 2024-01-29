import { EChecklistSuppliesTypes } from '../enums';

export interface ICreateChecklistSupplyReq {
    type: EChecklistSuppliesTypes;
    date: Date;
    liters: number;
    value: number;
    odometer: number;
    gasStation: string;
    workplace: string;
    noteCode: number;
    completedTank: boolean;
}

export interface ICreateChecklistSupplyRes {
    formId: number;
    type: EChecklistSuppliesTypes;
    date: Date;
    liters: number;
    value: number;
    odometer: number;
    gasStation: string;
    workplace: string;
    noteCode: number;
    completedTank: boolean;
}
