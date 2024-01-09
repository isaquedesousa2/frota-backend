import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { EquipamentSismaEntity } from './equipament-sisma.entity';

@Entity('TRANSBR.CLASSOPERA')
export class ClassEquipamentSismaEntity {
    @PrimaryColumn()
    IDCLOP: number;

    @Column()
    DESCRICAO: string;

    @OneToOne(() => EquipamentSismaEntity, (param) => param)
    @JoinColumn({ name: 'IDCLOP', referencedColumnName: 'IDCLOP' })
    equipament: EquipamentSismaEntity;
}
