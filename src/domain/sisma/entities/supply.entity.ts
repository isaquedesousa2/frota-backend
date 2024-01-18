import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('TRANSBR.PCABAST')
export class SupplyEntity {
    @Column({ type: 'integer', precision: 4, scale: 0 })
    CODICAXA: number;

    @Column({ type: 'varchar2', length: 1 })
    CONSIDERA_DESPESA: string;

    @Column({ type: 'varchar2', length: 5 })
    CODIDIV2: string;

    @PrimaryColumn({ type: 'integer', precision: 9, scale: 0 })
    NUMEDOCU: number;

    @PrimaryColumn({ type: 'integer', precision: 10, scale: 0 })
    IDMANUT: number;
}
