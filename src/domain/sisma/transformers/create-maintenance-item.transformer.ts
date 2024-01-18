import { MaintenanceItemEntity } from '../entities';
import { IMapCreateSupplyMaintenanceItem } from '../interfaces';

export function mapCreateMaintenaceItem(maintenanceItem: IMapCreateSupplyMaintenanceItem): MaintenanceItemEntity {
    const precoUnit = maintenanceItem.supply.value / maintenanceItem.supply.liters;

    return {
        CONTROLACONSUMO: '1',
        COMP_TANQUE: maintenanceItem.supply.completedTank == true ? 1 : 0,
        CODICOTA: 0,
        CODIMEDI: 2,
        CODISTAT: '0',
        DIV2CONTA: '0',
        CODICONTA: '0',
        DIV2CCUSTO: '0',
        CODICCUSTO: '0',
        FRASCO: 0,
        TIPOMANUT: 'ABA',
        ATUALMOX: '0',
        CODICAMA: 0,
        CODIFILT: 0,
        CODICOMP: 0,
        CODIMATE: maintenanceItem.materialCode === 7 ? 3 : 1,
        PRECO_UNIT: parseFloat(precoUnit.toFixed(2)),
        QUANTIDADE: maintenanceItem.supply.liters,
        VALOR: maintenanceItem.supply.value,
        IDEQUI: maintenanceItem.equipamentCode,
        DATAHORA: maintenanceItem.supply.date,
        IDMANUT: maintenanceItem.maintenanceCode,
    };
}
