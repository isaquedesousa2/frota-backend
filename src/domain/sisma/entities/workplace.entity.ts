import { Entity, PrimaryColumn } from 'typeorm';

@Entity('TRANSBR.LOCALTRABA')
export class WorkplaceEntity {
    @PrimaryColumn()
    CODILOTR: number;

    @PrimaryColumn()
    DESCRICAO: string;
}
