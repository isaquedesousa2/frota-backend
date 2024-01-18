import { Entity, PrimaryColumn } from 'typeorm';

@Entity('TRANSBR.SETORUSUAR')
export class UserSectorEntity {
    @PrimaryColumn()
    CODIUSU: number;

    @PrimaryColumn()
    CODIDIV3: number;
}
