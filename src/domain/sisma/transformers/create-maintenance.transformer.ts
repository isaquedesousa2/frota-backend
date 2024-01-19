import { MaintenanceEntity } from '../entities';
import { IMapCreateSupplyMaintenance } from '../interfaces';

export function mapCreateMaintenace(maintenance: IMapCreateSupplyMaintenance): MaintenanceEntity {
    return {
        VERSAO: '9',
        CODISTAT_KM: '0',
        CODISTAT_HORA: '0',
        PROGRAMA: 'Fluig',
        CODIDIV2: '1',
        TIPODOCU: 'MB',
        SERIE: '0',
        NUMECOLETOR: 0,
        CODIFUNC_OM: 0,
        CODIFUNC_MA: maintenance.driverCode,
        CODIDIV3_RECEPTOR: '0',
        CODITABE: 0,
        CODICONDPAGTO: 0,
        CODIFORMPAGTO: 0,
        IDIMPL: 16,
        CODIUSU: Number(process.env.CODE_USER),
        NUMENOTA: maintenance.supply.noteCode,
        DATAHORAINIC: maintenance.supply.date,
        DATAHORAFINA: maintenance.supply.date,
        NUMEDOCU: maintenance.supplyCoupunCode,
        TOTAL_NOTA: 0,
        HODOMETRO: maintenance.supply.km,
        HORIMETRO: maintenance.travel.horimeter,
        CODIOPER: 1,
        CODIPOMA: maintenance.gasStationCode,
        CODILOTR: maintenance.workplaceCode,
        CODIDIV3_USU: '7',
        IDEQUI: maintenance.equipamentCode,
        IDMANUT: maintenance.maintenanceCode,
        DIV2NUMEDOCU: `    1/   ${maintenance.supplyCoupunCode}`,
    };
}
