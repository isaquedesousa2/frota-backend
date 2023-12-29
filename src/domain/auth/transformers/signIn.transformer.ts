import { IUserReq } from '../../users/interfaces/user.interface';

export function mapTransformerSignIn(user: IUserReq, token: string) {
    return {
        ...user,
        token,
    };
}
