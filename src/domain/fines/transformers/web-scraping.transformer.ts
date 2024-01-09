import { IFineScrapingRes } from '../interfaces';

export function mapTransfomerWebScrapingRes(scrapings: string[]): IFineScrapingRes {
    const descricao: string = scrapings[4];
    const placa: string = scrapings[6];
    const situacao: string = String(scrapings[8]).trim();
    const dataHora: string = scrapings[10];
    const gravidade: string = scrapings[12];
    const local: string = scrapings[14];
    const municipio: string = scrapings[18];
    const valor: number = parseFloat(String(scrapings[20]).trim().replace('R$', '').replace(',', '.'));
    const pago: boolean = scrapings[21] === '(PAGO)' ? true : false;

    return {
        placa,
        descricao,
        situacao,
        dataHora,
        gravidade,
        local,
        municipio,
        valor,
        pago,
    };
}
