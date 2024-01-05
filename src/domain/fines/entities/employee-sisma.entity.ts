import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('TRANSBR.FUNCIONARIO')
export class EmployeeSismaEntity {
    @PrimaryColumn()
    CODIFUNC: number;

    @Column()
    NOMEFUNC: string;
}
