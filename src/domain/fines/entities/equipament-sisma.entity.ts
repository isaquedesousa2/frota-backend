import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { TripsSismaEntity } from './trips-sisma.entity';

@Entity('TRANSBR.EQUIPAMENTO')
export class EquipamentSismaEntity {
    @PrimaryColumn()
    IDEQUI: number;

    @Column()
    PLACAATUAL: string;

    @OneToOne(() => TripsSismaEntity, (tripsSisma) => tripsSisma.equipament)
    @JoinColumn({ name: 'IDEQUI', referencedColumnName: 'IDEQUI' })
    trips: TripsSismaEntity;
}
