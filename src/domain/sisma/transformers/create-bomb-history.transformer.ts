import { PumpHistoryEntity } from '../entities';
import { IMapCreateSupplyPumpHistory } from '../interfaces';

export const mapCreatePumpHistory = (pumpHistory: IMapCreateSupplyPumpHistory): PumpHistoryEntity => {
    return {
        DATAHORAINIC: pumpHistory.supply.date,
        QUANTIDADE: pumpHistory.supply.liters,
        VALOR: pumpHistory.supply.value,
        ENCERRANTE_INICIAL: 0,
        ENCERRANTE_FINAL: 0,
        VIRADA: 0,
        CODIDIV2: '1',
        TIPODOCU: 'MB',
        NUMEDOCU: pumpHistory.supplyCoupunCode,
        SERIE: '0',
        TIPOMANUT: 'ABA',
        CODIMATE: pumpHistory.materialCode === 7 ? 3 : 1,
        CODIPOMA: pumpHistory.gasStationCode,
        CODIBOMB: 0,
    };
};
