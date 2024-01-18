import { SupplyEntity } from '../entities';
import { IMapCreateSupply } from '../interfaces';

export const mapCreateSupply = (supply: IMapCreateSupply): SupplyEntity => {
    return {
        CODICAXA: 0,
        CONSIDERA_DESPESA: '1',
        CODIDIV2: '1',
        NUMEDOCU: supply.coupunCode,
        IDMANUT: supply.maintenanceCode,
    };
};
