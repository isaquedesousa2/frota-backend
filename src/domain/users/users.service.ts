import { BadRequestException, Injectable } from '@nestjs/common';
import { UserCreateDTO } from './dtos/user-create.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { mapTransformerUser } from './transformers/user.transformer';
import { IUserReq, IUserResettingPassword } from './interfaces/user.interface';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity, process.env.SGM_NAME)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    async create(user: UserCreateDTO) {
        const existUsername = await this.findOneByUsername(user.username);
        const existEmail = await this.findOneByUsername(user.email);

        if (existUsername || existEmail) {
            throw new BadRequestException('User already registered.');
        }

        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, salt);

        const response: IUserReq = await this.userRepository.save(user);

        return mapTransformerUser(response);
    }

    async firstAccess({ id, password }: IUserResettingPassword) {
        const user = await this.userRepository.findOne({ where: { id } });

        user.firstAccess = new Date();

        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(password, salt);

        await this.userRepository.save(user);
    }

    async resettingPassword({ id, password }: IUserResettingPassword) {
        const user = await this.userRepository.findOne({ where: { id } });

        if (!user) {
            throw new BadRequestException('User not exist.');
        }

        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(password, salt);

        await this.userRepository.save(user);
    }

    async findOneById(id: number) {
        const response = await this.userRepository.findOne({ where: { id }, relations: ['permissions', 'permissions.permission'] });
        return mapTransformerUser(response);
    }

    async findAll() {
        const response = await this.userRepository.find({ relations: ['permissions', 'permissions.permission'] });
        return response.map(mapTransformerUser);
    }

    async findOneByEmail(email: string) {
        const response = await this.userRepository.findOne({ where: { email }, relations: ['permissions', 'permissions.permission'] });
        return mapTransformerUser(response);
    }

    async findOneByUsername(username: string) {
        return await this.userRepository.findOne({ where: { username }, relations: ['permissions', 'permissions.permission'] });
    }
}
