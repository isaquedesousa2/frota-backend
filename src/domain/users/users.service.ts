import { BadRequestException, Injectable } from '@nestjs/common';
import { UserCreateDTO } from './dtos/user-create.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { mapTransformerUser } from './transformers/user.transformer';
import { IUserReq } from './interfaces/user.interface';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity, process.env.SGM_NAME)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    async create(user: UserCreateDTO) {
        // const existUsername = await this.findOneByUsername(user.username);
        // const existEmail = await this.findOneByUsername(user.email);

        // if (existUsername || existEmail) {
        //     throw new BadRequestException('User already registered.');
        // }

        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, salt);

        // const response: IUserReq = await this.userRepository.save(user);
        const response: IUserReq = {
            id: 1,
            username: 'isaque.sousa',
            password: '123123123213',
            email: 'isaque.sousa@distribuidoramedeiros.com.br',
            name: 'Isaque de Sousa',
            updatedAt: new Date('2023-12-29T20:49:21.560Z'),
            createdAt: new Date('2023-12-29T20:49:21.560Z'),
        };

        return mapTransformerUser(response);
    }

    async findOneById(id: number) {
        const response = await this.userRepository.findOne({ where: { id } });
        return mapTransformerUser(response);
    }

    async findAll() {
        const response = await this.userRepository.find();
        return response.map(mapTransformerUser);
    }

    async findOneByEmail(email: string) {
        const response = await this.userRepository.findOne({ where: { email } });
        return mapTransformerUser(response);
    }

    async findOneByUsername(username: string) {
        return await this.userRepository.findOne({ where: { username } });
    }
}
