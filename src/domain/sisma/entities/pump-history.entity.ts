import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TRANSBR.HISTOBOMBA')
export class PumpHistoryEntity {
    @Column({ type: 'timestamp' })
    DATAHORAINIC: Date;

    @Column({ type: 'integer', precision: 9, scale: 4 })
    QUANTIDADE: number;

    @Column({ type: 'integer', precision: 11, scale: 4 })
    VALOR: number;

    @Column({ type: 'integer', precision: 14, scale: 4 })
    ENCERRANTE_INICIAL: number;

    @Column({ type: 'integer', precision: 14, scale: 4 })
    ENCERRANTE_FINAL: number;

    @Column({ type: 'integer', precision: 14, scale: 4 })
    VIRADA: number;

    @Column({ type: 'varchar2', length: 5 })
    CODIDIV2: string;

    @Column({ type: 'varchar2', length: 3 })
    TIPODOCU: string;

    @PrimaryColumn({ type: 'integer', precision: 9, scale: 0 })
    NUMEDOCU: number;

    @Column({ type: 'varchar2', length: 3 })
    SERIE: string;

    @Column({ type: 'varchar2', length: 3 })
    TIPOMANUT: string;

    @Column({ type: 'integer', precision: 6, scale: 0 })
    CODIMATE: number;

    @Column({ type: 'integer', precision: 5, scale: 0 })
    CODIPOMA: number;

    @Column({ type: 'integer', precision: 4, scale: 0 })
    CODIBOMB: number;
}
