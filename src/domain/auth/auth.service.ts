import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ICredentialsAuth } from './interfaces/credentials.interface';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { IUserReq } from '../users/interfaces/user.interface';
import { mapTransformerSignIn } from './transformers/signIn.transformer';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService, private readonly usersService: UsersService) {}

    async signIn(credentials: ICredentialsAuth) {
        try {
            const { username, password } = credentials;

            const user = await this.usersService.findOneByUsername(username);

            const isAuthenticated = await bcrypt.compare(password, user.password);

            if (!user || !isAuthenticated) {
                throw new UnauthorizedException('Username or password is invalid.');
            }

            const token = await this.createToken(user);

            return mapTransformerSignIn(user, token);
        } catch (e) {
            throw new BadRequestException(e.message);
        }
    }

    async validateToken(token: string) {
        try {
            return this.jwtService.verify(token);
        } catch (e) {
            throw new BadRequestException(e.message);
        }
    }

    private async createToken(user: IUserReq) {
        return this.jwtService.sign({ id: user.id }, { expiresIn: '1 day' });
    }
}