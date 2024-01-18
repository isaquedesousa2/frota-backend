import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('TRANSBR.FUNCIONARIO')
export class EmployeeEntity {
    @PrimaryColumn()
    CODIFUNC: number;

    @Column()
    DATADESA: Date;

    @Column()
    NOMEFUNC: string;

    @Column()
    AUXVIA: string;

    @Column()
    CODIDIV3: number;

    @Column()
    TRABMA: string;
}
