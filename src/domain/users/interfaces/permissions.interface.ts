import { UserEntity } from '../entities';

export interface IUserPermissionsReq {
    id: number;
    user: UserEntity;
    permission: number;
}

export interface IPermissionsReq {
    id: number;
    name: string;
    description: string;
}
