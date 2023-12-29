export interface IFineScrapingReq {
    descricao: string;
    placa: string;
    situacao: string;
    dataHora: string;
    gravidade: string;
    local: string;
    municipio: string;
    valor: number;
    pago: boolean;
}

export interface IFineRes {
    plate: string;
    number: number;
    fines: IFine[];
}

export interface IFine {
    coupunNumber: number;
    employee: string;
    employeeNumber: number;
    date: string;
    description: string;
    situation: string;
    gravity: string;
    local: string;
    country: string;
    value: number;
    paid: boolean;
}
