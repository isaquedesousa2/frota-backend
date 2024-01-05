import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { EquipamentSismaEntity } from './equipament-sisma.entity';
import { EmployeeSismaEntity } from './employee-sisma.entity';
import { RoutesSismaEntity } from './routes-sisma.entity';

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

    @OneToOne(() => RoutesSismaEntity, (param) => param.CODIROTA, { eager: true })
    @JoinColumn({ name: 'CODIROTA', referencedColumnName: 'CODIROTA' })
    route: RoutesSismaEntity;

    @OneToOne(() => EmployeeSismaEntity, (param) => param.CODIFUNC, { eager: true })
    @JoinColumn({ name: 'CODIFUNC', referencedColumnName: 'CODIFUNC' })
    employee: EmployeeSismaEntity;

    @OneToOne(() => EquipamentSismaEntity, (param) => param.IDEQUI, { eager: true })
    @JoinColumn({ name: 'IDEQUI', referencedColumnName: 'IDEQUI' })
    equipament: EquipamentSismaEntity;
}
