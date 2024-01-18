import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TRANSBR.MANUT')
export class MaintenanceEntity {
    @PrimaryColumn({ type: 'integer', precision: 10, scale: 0 })
    IDMANUT: number;

    @Column({ type: 'varchar2', length: 3 })
    VERSAO: string;

    @Column({ type: 'char', length: 1 })
    CODISTAT_KM: string;

    @Column({ type: 'char', length: 1 })
    CODISTAT_HORA: string;

    @Column({ type: 'varchar2', length: 12 })
    PROGRAMA: string;

    @Column({ type: 'varchar2', length: 5 })
    CODIDIV2: string;

    @Column({ type: 'varchar2', length: 3 })
    TIPODOCU: string;

    @Column({ type: 'integer', precision: 9, scale: 0 })
    NUMEDOCU: number;

    @Column({ type: 'varchar2', length: 8 })
    SERIE: string;

    @Column({ type: 'timestamp' })
    DATAHORAINIC: Date;

    @Column({ type: 'timestamp' })
    DATAHORAFINA: Date;

    @Column({ type: 'integer', precision: 10, scale: 0 })
    NUMENOTA: number;

    @Column({ type: 'integer', precision: 12, scale: 4 })
    TOTAL_NOTA: number;

    @Column({ type: 'integer', precision: 9, scale: 1 })
    HODOMETRO: number;

    @Column({ type: 'integer', precision: 9, scale: 1 })
    HORIMETRO: number;

    @Column({ type: 'integer', precision: 5, scale: 0 })
    NUMECOLETOR: number;

    @Column({ type: 'integer', precision: 6, scale: 0 })
    CODILOTR: number;

    @Column({ type: 'integer', precision: 4, scale: 0 })
    CODIOPER: number;

    @Column({ type: 'integer', precision: 5, scale: 0 })
    CODIPOMA: number;

    @Column({ type: 'integer', precision: 10, scale: 0 })
    CODIFUNC_MA: number;

    @Column({ type: 'integer', precision: 10, scale: 0 })
    CODIFUNC_OM: number;

    @Column({ type: 'integer', precision: 5, scale: 0 })
    IDIMPL: number;

    @Column({ type: 'varchar2', length: 5 })
    CODIDIV3_USU: string;

    @Column({ type: 'integer', precision: 5, scale: 0 })
    IDEQUI: number;

    @Column({ type: 'integer', precision: 10, scale: 0 })
    CODIUSU: number;

    @Column({ type: 'varchar2', length: 15 })
    DIV2NUMEDOCU: string;

    @Column({ type: 'varchar2', length: 5 })
    CODIDIV3_RECEPTOR: string;

    @Column({ type: 'integer', precision: 4, scale: 0 })
    CODITABE: number;

    @Column({ type: 'integer', precision: 5, scale: 0 })
    CODICONDPAGTO: number;

    @Column({ type: 'integer', precision: 5, scale: 0 })
    CODIFORMPAGTO: number;
}
