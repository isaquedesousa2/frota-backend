import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { TripsSismaEntity } from './trips-sisma.entity';

@Entity('TRANSBR.FUNCIONARIO')
export class EmployeeSismaEntity {
    @PrimaryColumn()
    CODIFUNC: number;

    @Column()
    NOMEFUNC: string;

    @OneToOne(() => TripsSismaEntity, (tripsSisma) => tripsSisma.equipament)
    @JoinColumn({ name: 'CODIFUNC', referencedColumnName: 'CODIFUNC' })
    trips: TripsSismaEntity;
}
