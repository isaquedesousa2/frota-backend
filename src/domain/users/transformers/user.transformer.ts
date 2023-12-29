import { IUserReq, IUserRes } from '../interfaces/user.interface';

export function mapTransformerUser(user: IUserReq): IUserRes {
    return {
        id: user.id,
        username: user.username,
        email: user.email,
        name: user.name,
        updatedAt: user.updatedAt,
        createdAt: user.createdAt,
    };
}
