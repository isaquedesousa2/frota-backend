import { IsString, MinLength } from '@nestjs/class-validator';

export class UserResettingPasswordDTO {
    @IsString()
    @MinLength(6)
    password: string;
}
