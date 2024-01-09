import { IUserReq, IUserRes } from '../interfaces/user.interface';

export function mapTransformerUser(user: IUserReq): IUserRes {
    const permissions = user.permissions
        ? user.permissions.map((permission) => ({
              id: permission.permission.id,
              name: permission.permission.name,
              description: permission.permission.description,
          }))
        : [];

    return {
        id: user.id,
        username: user.username,
        email: user.email,
        name: user.name,
        firstAccess: user.firstAccess,
        permissions: permissions,
        updatedAt: user.updatedAt,
        createdAt: user.createdAt,
    };
}
