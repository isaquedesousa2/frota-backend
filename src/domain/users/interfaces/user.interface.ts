export interface IUserRes {
    id: number;
    username: string;
    name: string;
    email: string;
    updatedAt: Date;
    createdAt: Date;
}

export interface IUserReq extends IUserRes {
    password: string;
}
