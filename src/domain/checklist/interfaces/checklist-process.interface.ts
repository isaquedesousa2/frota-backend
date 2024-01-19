import { ECheckListProcessStatus } from '../enums';

export interface ICreateChecklistProcessReq {
    fluigCode: number;
}

export interface ICreateChecklistProcessRes extends ICreateChecklistProcessReq {
    startDate: Date;
    status: ECheckListProcessStatus;
}
