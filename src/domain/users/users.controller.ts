import { Body, Controller, Get, Param, Post, UseGuards, Headers } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserCreateDTO } from './dtos/user-create.dto';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import { UserResettingPasswordDTO } from './dtos';

@UseGuards(JwtAuthGuard)
@Controller('/api/v1/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() body: UserCreateDTO) {
        return this.usersService.create(body);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOneById(+id);
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Post('/first-access')
    firstAcess(@Headers('Authorization') token: string, @Body('password') password: string) {
        return this.firstAcess(token, password);
    }

    @Post(':id/resetting-password')
    resettingPassword(@Param('id') id: string, @Body() { password }: UserResettingPasswordDTO) {
        return this.usersService.resettingPassword({ id: +id, password });
    }
}
