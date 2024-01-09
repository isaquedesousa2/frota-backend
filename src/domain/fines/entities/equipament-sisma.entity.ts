import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { ClassEquipamentSismaEntity } from './class-equipament-sisma.entity';

@Entity('TRANSBR.EQUIPAMENTO')
export class EquipamentSismaEntity {
    @PrimaryColumn()
    IDEQUI: number;

    @Column()
    PLACAATUAL: string;

    @Column()
    RENAVAM2: number;

    @Column()
    IDCLOP: number;

    @OneToOne(() => ClassEquipamentSismaEntity, (param) => param.IDCLOP, { eager: true })
    @JoinColumn({ name: 'IDCLOP', referencedColumnName: 'IDCLOP' })
    class: ClassEquipamentSismaEntity;
}
