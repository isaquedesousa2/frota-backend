import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { EquipamentEntity } from './equipament.entity';

@Entity('classequipament')
export class ClassEquipamentEntity {
    @PrimaryColumn()
    IDCLOP: number;

    @Column()
    DESCRICAO: string;

    @OneToOne(() => EquipamentEntity, (param) => param)
    @JoinColumn({ name: 'IDCLOP', referencedColumnName: 'IDCLOP' })
    equipament: EquipamentEntity;
}
