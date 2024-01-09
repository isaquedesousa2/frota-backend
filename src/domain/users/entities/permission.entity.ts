import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsersPermissionsEntity } from './users-permissions.entity';

@Entity('permissions')
export class PermissionEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(() => UsersPermissionsEntity, (usersPermissions) => usersPermissions.permission)
    usersPermissions: UsersPermissionsEntity[];
}
