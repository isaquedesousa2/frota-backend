import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('employees')
export class EmployeeEntity {
    @PrimaryColumn()
    CODIFUNC: number;

    @Column()
    NOMEFUNC: string;
}
