// user.entity.ts
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UsersPermissionsEntity } from './users-permissions.entity';

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    firstAccess: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(() => UsersPermissionsEntity, (permission) => permission.user, { eager: true })
    permissions: UsersPermissionsEntity[];
}
