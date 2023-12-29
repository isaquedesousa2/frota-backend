import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { EquipamentSismaEntity } from './equipament-sisma.entity';
import { EmployeeSismaEntity } from './employee-sisma.entity';

@Entity('TRANSBR.PCVIAGEM')
export class TripsSismaEntity {
    @PrimaryColumn()
    NUMEDOCU: number;

    @Column()
    IDEQUI: number;

    @Column()
    DATAHORAPARTIDA: Date;

    @Column()
    DATAHORACHEGADA: Date;

    @Column()
    CODIFUNC: number;

    @OneToOne(() => EmployeeSismaEntity, (employeeSisma) => employeeSisma.trips, { eager: true })
    @JoinColumn({ name: 'CODIFUNC', referencedColumnName: 'CODIFUNC' })
    employee: EmployeeSismaEntity;

    @OneToOne(() => EquipamentSismaEntity, (equipamentSisma) => equipamentSisma.trips, { eager: true })
    @JoinColumn({ name: 'IDEQUI', referencedColumnName: 'IDEQUI' })
    equipament: EquipamentSismaEntity;
}
