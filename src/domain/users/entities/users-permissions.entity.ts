import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { PermissionEntity } from './permission.entity';

@Entity('USERS_PERMISSIONS')
export class UsersPermissionsEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(() => UserEntity, (user) => user.permissions)
    @JoinColumn({ name: 'user' })
    user: UserEntity;

    @ManyToOne(() => PermissionEntity)
    @JoinColumn({ name: 'permission' })
    permission: PermissionEntity;
}
