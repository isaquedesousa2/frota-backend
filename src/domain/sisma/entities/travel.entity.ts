import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('TRANSBR.PCVIAGEM')
export class TravelEntity {
    @PrimaryColumn({ type: 'integer', precision: 9, scale: 0 })
    NUMEDOCU: string;

    @Column({ type: 'varchar2' })
    CODIDIV2: string;

    @Column({ type: 'integer', precision: 10, scale: 0 })
    CODIFUNC: number;

    @Column({ type: 'varchar2', length: 10 })
    CODIROTA: string;

    @Column({ type: 'integer', precision: 5, scale: 0 })
    IDEQUI: number;

    @Column({ type: 'timestamp' })
    DATAHORAPARTIDA: Date;

    @Column({ type: 'timestamp' })
    DATAHORAPREVCHEGADA: Date;

    @Column({ type: 'timestamp' })
    DATAHORACHEGADA: Date;

    @Column({ type: 'integer', precision: 10, scale: 2 })
    VALORCARGA: number;

    @Column({ type: 'varchar2', length: 200 })
    OBSERVACAO: string;

    @Column({ type: 'integer', precision: 10, scale: 0 })
    CODIUSU: number;

    @Column({ type: 'varchar2', length: 15 })
    DIV2NUMEDOCU: string;

    @Column({ type: 'integer', precision: 4, scale: 0 })
    ENTREGA: number;

    @Column({ type: 'integer', precision: 9, scale: 2 })
    KMPARTIDA: number;

    @Column({ type: 'integer', precision: 9, scale: 2 })
    KMCHEGADA: number;

    @Column({ type: 'integer', precision: 7, scale: 2 })
    CUSTOMOTORISTA: number;

    @Column({ type: 'integer', precision: 18, scale: 14 })
    HORA_DESP: number;

    @Column({ type: 'varchar2', length: 200 })
    MOTIVO_HORA_DESP: string;

    @Column({ type: 'integer', precision: 11, scale: 3 })
    PESOCARGA: number;

    @Column({ type: 'char', length: 1 })
    CHECKLIST_OK: string;

    @Column({ type: 'integer', precision: 10, scale: 0 })
    CODIFUNC_AUX: number;
}
