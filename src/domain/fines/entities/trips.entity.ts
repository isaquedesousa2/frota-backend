import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { EquipamentEntity } from './equipament.entity';
import { EmployeeEntity } from './employee.entity';
import { RoutesEntity } from './routes.entity';

@Entity('trips')
export class TripsEntity {
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

    @OneToOne(() => RoutesEntity, (param) => param.CODIROTA, { eager: true })
    @JoinColumn({ name: 'CODIROTA', referencedColumnName: 'CODIROTA' })
    route: RoutesEntity;

    @OneToOne(() => EmployeeEntity, (param) => param.CODIFUNC, { eager: true })
    @JoinColumn({ name: 'CODIFUNC', referencedColumnName: 'CODIFUNC' })
    employee: EmployeeEntity;

    @OneToOne(() => EquipamentEntity, (param) => param.IDEQUI, { eager: true })
    @JoinColumn({ name: 'IDEQUI', referencedColumnName: 'IDEQUI' })
    equipament: EquipamentEntity;
}
