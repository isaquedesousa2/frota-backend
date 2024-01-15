import { IsEmail, IsString, MinLength } from '@nestjs/class-validator';

export class UserCreateDTO {
    @MinLength(6)
    @IsString()
    username: string;

    @MinLength(8)
    @IsString()
    password: string;

    @MinLength(6)
    @IsString()
    name: string;

    @IsEmail()
    email: string;
}
