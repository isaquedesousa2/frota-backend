import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('TRANSBR.PCROTA')
export class RouteEntity {
    @PrimaryColumn()
    CODIROTA: string;

    @PrimaryColumn()
    DESCRRESUM: string;

    @Column()
    DATADESA: Date;
}
