import { BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { CreateTravelDTO } from '../../dto/travel';
import { ICreateTravelRepositories } from '../../interfaces';
import { mapCreateTravel } from '../../transformers';
import { EmployeeEntity, EquipamentEntity, RouteEntity, TravelEntity } from '../../entities';
import { In, IsNull, Repository } from 'typeorm';

export const createTravel = async (repositories: ICreateTravelRepositories, data: CreateTravelDTO) => {
    const coupunCode = await getMaxCupomCode(repositories.travel);
    const { equipamentCode, materialCode } = await getEquipamentCode(repositories.equipament, data.vehicleCode);
    const routeCode = await getRouteCode(repositories.route, data.nameRoute);
    const driverCode = await getdriverCode(repositories.employee, data.driverName);
    const deliveryManCode = await getDeliveryManCode(repositories.employee, data.deliveryManName);

    if (!coupunCode) {
        throw new InternalServerErrorException('Falha ao buscar o código da viagem.');
    }

    if (!equipamentCode) {
        throw new InternalServerErrorException('Falha ao buscar o código do equipamento.');
    }

    if (!routeCode) {
        throw new BadRequestException('Rota não encontrada.');
    }

    if (!driverCode) {
        throw new BadRequestException('Motorista não encontrado.');
    }

    if (!deliveryManCode) {
        throw new BadRequestException('Entregador não encontrado.');
    }
    const travel = mapCreateTravel({
        coupunCode: String(coupunCode),
        equipamentCode,
        routeCode,
        deliveryManCode,
        driverCode,
        ...data,
    });

    return { materialCode, ...travel };
};

const getMaxCupomCode = async (repository: Repository<TravelEntity>) => {
    const response = await repository
        .createQueryBuilder('travel')
        .select('MAX(travel.NUMEDOCU)', 'code')
        .where('NUMEDOCU < :maxValue', { maxValue: 416745 })
        .getRawOne();

    return response?.code + 1 || null;
};

const getEquipamentCode = async (repository: Repository<EquipamentEntity>, code: number) => {
    const response = await repository.findOne({
        where: {
            CODIESPE: In([1, 5]),
            CODIDIV2: '1',
            NUMEEQUI: String(code),
        },
    });

    return { equipamentCode: response?.IDEQUI || null, materialCode: response?.IDCLOP };
};

const getdriverCode = async (repository: Repository<EmployeeEntity>, name: string) => {
    const response = await repository.findOne({
        where: {
            TRABMA: '1',
            DATADESA: IsNull(),
            NOMEFUNC: name,
        },
    });

    return response?.CODIFUNC || null;
};

const getDeliveryManCode = async (repository: Repository<EmployeeEntity>, name: string) => {
    const response = await repository.findOne({
        where: {
            AUXVIA: '1',
            DATADESA: IsNull(),
            NOMEFUNC: name,
        },
    });

    return response?.CODIFUNC || null;
};

const getRouteCode = async (repository: Repository<RouteEntity>, name: string) => {
    const response = await repository.findOne({
        where: {
            DESCRRESUM: name,
            DATADESA: IsNull(),
        },
    });

    return response?.CODIROTA || null;
};
