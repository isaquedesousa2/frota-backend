import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('TRANSBR.PONTOMANUT')
export class MaintenancePointEntity {
    @PrimaryColumn()
    CODIPOMA: number;

    @Column()
    PONTOABAST: string;

    @Column()
    DESCRRESUM: string;
}
