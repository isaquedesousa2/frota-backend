import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO } from './dtos/sigIn.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/login')
    signIn(@Body() credentials: SignInDTO) {
        return this.authService.signIn(credentials);
    }

    @Post('/validate')
    validateToken(@Body('token') token: string) {
        return this.authService.validateToken(token);
    }

    @Get('/refresh')
    refreshUserData(@Headers('authorization') token: string) {
        return this.authService.refreshUserData(token.split(' ')[1]);
    }
}
