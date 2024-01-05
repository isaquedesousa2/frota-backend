import { TripsSismaEntity } from '../entities/trips-sisma.entity';
import { IFineRes, IFineScrapingReq } from '../interfaces';

export function mapTransformerFines(data: { plate: string; trip: TripsSismaEntity; fine: IFineScrapingReq }[]): IFineRes[] {
    const result: IFineRes[] = [];

    for (const dt of data) {
        if (!result.some((res) => res.plate === dt.plate)) {
            result.push({
                plate: dt.plate,
                number: dt.trip.IDEQUI,
                reindeer: dt.trip.equipament.RENAVAM2,
                class: dt.trip.equipament.class.DESCRICAO,
                fines: [],
            });
        }

        for (const res of result) {
            if (res.plate === dt.plate) {
                res.fines.push({
                    employee: dt.trip.employee.NOMEFUNC,
                    employeeNumber: dt.trip.employee.CODIFUNC,
                    coupunNumber: dt.trip.NUMEDOCU,
                    date: dt.fine.dataHora,
                    local: dt.fine.local,
                    country: dt.fine.municipio,
                    description: dt.fine.descricao,
                    gravity: dt.fine.gravidade,
                    situation: dt.fine.situacao,
                    route: dt.trip.route.DESCRRESUM,
                    value: dt.fine.valor,
                    paid: dt.fine.pago,
                });
            }
        }
    }

    return result;
}
