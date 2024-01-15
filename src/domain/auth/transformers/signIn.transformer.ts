import { IUserReq } from '../../users/interfaces/user.interface';

export function mapTransformerSignIn(user: IUserReq, token: string) {
    delete user.password;

    return {
        user,
        token,
    };
}
