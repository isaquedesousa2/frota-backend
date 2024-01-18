import { TravelEntity } from '../entities';
import { IMapCreateTravel } from '../interfaces';

export const mapCreateTravel = (travel: IMapCreateTravel): TravelEntity => {
    return {
        CODIDIV2: '1',
        NUMEDOCU: travel.coupunCode,
        CODIFUNC: travel.driverCode,
        CODIROTA: travel.routeCode,
        CODIFUNC_AUX: travel.deliveryManCode,
        IDEQUI: travel.equipamentCode,
        DATAHORAPARTIDA: travel.startDate,
        DATAHORAPREVCHEGADA: travel.expectedDate,
        DATAHORACHEGADA: travel.endDate,
        VALORCARGA: travel.cargoValue,
        OBSERVACAO: travel.observation,
        CODIUSU: Number(process.env.CODE_USER),
        DIV2NUMEDOCU: `    1/   ${travel.coupunCode}`,
        ENTREGA: travel.quantityDeliveries,
        KMPARTIDA: travel.initialOdometer,
        KMCHEGADA: travel.finalOdometer,
        CUSTOMOTORISTA: travel.valueSpentWithDiems,
        HORA_DESP: 0,
        MOTIVO_HORA_DESP: null,
        PESOCARGA: travel.cargoWeight,
        CHECKLIST_OK: '1',
    };
};
