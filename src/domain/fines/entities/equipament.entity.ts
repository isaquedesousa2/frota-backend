import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { ClassEquipamentEntity } from './class-equipament.entity';

@Entity('equipament')
export class EquipamentEntity {
    @PrimaryColumn()
    IDEQUI: number;

    @Column()
    PLACAATUAL: string;

    @Column()
    RENAVAM2: number;

    @Column()
    IDCLOP: number;

    @OneToOne(() => ClassEquipamentEntity, (param) => param.IDCLOP, { eager: true })
    @JoinColumn({ name: 'IDCLOP', referencedColumnName: 'IDCLOP' })
    class: ClassEquipamentEntity;
}
