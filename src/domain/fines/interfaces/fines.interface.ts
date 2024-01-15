export interface IFineScrapingRes {
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

export interface IFineScrapingReq {
    link: string;
    result: string[];
}

export interface IFineRes {
    plate: string;
    number: number;
    reindeer: number;
    class: string;
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
    route: string;
    value: number;
    paid: boolean;
}
