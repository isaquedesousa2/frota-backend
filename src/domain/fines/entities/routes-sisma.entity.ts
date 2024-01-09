import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('TRANSBR.PCROTA')
export class RoutesSismaEntity {
    @PrimaryColumn()
    CODIROTA: string;

    @Column()
    DESCRRESUM: string;
}
