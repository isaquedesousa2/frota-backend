import { UsersPermissionsEntity } from '../entities/users-permissions.entity';
import { IPermissionsReq } from './permissions.interface';

export interface IUserRes {
    id: number;
    username: string;
    name: string;
    email: string;
    firstAccess: Date;
    permissions: IPermissionsReq[];
    updatedAt: Date;
    createdAt: Date;
}

export interface IUserReq {
    id: number;
    username: string;
    name: string;
    email: string;
    firstAccess: Date;
    permissions: UsersPermissionsEntity[];
    password: string;
    updatedAt: Date;
    createdAt: Date;
}

export interface IUserResettingPassword {
    id: number;
    password: string;
}
