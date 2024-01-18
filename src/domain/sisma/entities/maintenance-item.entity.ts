import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('TRANSBR.ITEMMANUT')
export class MaintenanceItemEntity {
    @PrimaryColumn({ type: 'integer', precision: 10, scale: 0 })
    IDMANUT: number;

    @Column({ type: 'char', length: 1 })
    CONTROLACONSUMO: string;

    @Column({ type: 'integer', precision: 2, scale: 0 })
    COMP_TANQUE: number;

    @Column({ type: 'integer', precision: 6, scale: 0 })
    CODICOTA: number;

    @Column({ type: 'integer', precision: 11, scale: 4 })
    PRECO_UNIT: number;

    @Column({ type: 'integer', precision: 9, scale: 4 })
    QUANTIDADE: number;

    @Column({ type: 'integer', precision: 6, scale: 0 })
    FRASCO: number;

    @Column({ type: 'integer', precision: 11, scale: 4 })
    VALOR: number;

    @Column({ type: 'char', length: 1 })
    ATUALMOX: string;

    @Column({ type: 'integer', precision: 4, scale: 0 })
    CODICAMA: number;

    @Column({ type: 'varchar2', length: 5 })
    DIV2CONTA: string;

    @Column({ type: 'varchar2', length: 15 })
    CODICONTA: string;

    @Column({ type: 'varchar2', length: 5 })
    DIV2CCUSTO: string;

    @Column({ type: 'varchar2', length: 5 })
    CODICCUSTO: string;

    @Column({ type: 'integer', precision: 5, scale: 0 })
    IDEQUI: number;

    @Column({ type: 'timestamp' })
    DATAHORA: Date;

    @Column({ type: 'char', length: 1 })
    CODISTAT: string;

    @Column({ type: 'integer', precision: 4, scale: 0 })
    CODIMEDI: number;

    @Column({ type: 'varchar2', length: 3 })
    TIPOMANUT: string;

    @Column({ type: 'integer', precision: 4, scale: 0 })
    CODIFILT: number;

    @Column({ type: 'integer', precision: 4, scale: 0 })
    CODICOMP: number;

    @Column({ type: 'integer', precision: 6, scale: 0 })
    CODIMATE: number;
}
