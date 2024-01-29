import { TripsSismaEntity } from '../entities/trips-sisma.entity';
import { IFineRes, IFineScrapingRes } from '../interfaces';

export function mapTransformerFines(data: { plate: string; trip: TripsSismaEntity; fine: IFineScrapingRes }[]): IFineRes[] {
    const result: IFineRes[] = [];

    for (const dt of data) {
        if (!result.some((res) => res.plate === dt.plate)) {
            result.push({
                plate: dt.plate,
                number: dt.trip ? dt.trip.IDEQUI : null,
                reindeer: dt.trip ? dt.trip.equipament.RENAVAM2 : null,
                class: dt.trip ? dt.trip.equipament.class.DESCRICAO : null,
                fines: [],
            });
        }

        for (const res of result) {
            if (res.plate === dt.plate) {
                res.fines.push({
                    infractionNotice: dt.fine.autoInfracao,
                    employee: dt.trip ? dt.trip.employee.NOMEFUNC : null,
                    employeeNumber: dt.trip ? dt.trip.employee.CODIFUNC : null,
                    coupunNumber: dt.trip ? dt.trip.NUMEDOCU : null,
                    date: dt.fine.dataHora,
                    local: dt.fine.local,
                    country: dt.fine.municipio,
                    description: dt.fine.descricao,
                    gravity: dt.fine.gravidade,
                    situation: dt.fine.situacao,
                    route: dt.trip ? dt.trip.route.DESCRRESUM : null,
                    value: dt.fine.valor,
                    paid: dt.fine.pago,
                });
            }
        }
    }

    return result;
}
