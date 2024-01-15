import { IsString } from '@nestjs/class-validator';

export class SignInDTO {
    @IsString()
    username: string;

    @IsString()
    password: string;
}
