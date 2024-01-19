export interface ICreateCheckListHistoryReq {
    status: boolean;
    description: string;
}

export interface ICreateCheckListHistoryRes extends ICreateCheckListHistoryReq {
    processId: number;
    formId: number;
}
