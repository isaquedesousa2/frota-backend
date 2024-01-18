import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('TRANSBR.EQUIPAMENTO')
export class EquipamentEntity {
    @PrimaryColumn({ type: 'integer', precision: 5, scale: 0 })
    IDEQUI: number;

    @Column()
    IDCLOP: number;

    @Column()
    CODIDIV2: string;

    @Column()
    CODIESPE: number;

    @Column()
    NUMEEQUI: string;
}
