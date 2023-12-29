import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserCreateDTO } from './dtos/user-create.dto';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('users')
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
}
