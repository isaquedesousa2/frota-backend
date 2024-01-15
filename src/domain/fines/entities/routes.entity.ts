import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('routes')
export class RoutesEntity {
    @PrimaryColumn()
    CODIROTA: string;

    @Column()
    DESCRRESUM: string;
}
