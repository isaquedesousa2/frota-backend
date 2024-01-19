import { BadRequestException } from '@nestjs/common';
import { IPaginationParams, IPaginateResponse } from './paginate.interface';

const defaultPage = 1;
const defaultPerPage = 10;
const maxPaginationPerPage = 150;

export function getPaginationParams(page = defaultPage, perPage = defaultPerPage): IPaginationParams {
    if (perPage > maxPaginationPerPage) {
        throw new BadRequestException('MAX_PER_PAGE_REACHED');
    }

    const skip = (page - 1) * perPage;
    const take = perPage;

    return {
        skip,
        take,
    };
}

export function paginateResponse<Data>(result: Data, total: number, page = defaultPage, perPage = defaultPerPage): IPaginateResponse<Data> {
    const totalPerPage = +perPage;
    const lastPage = Math.ceil(+total / +perPage);
    const previousPage = +page - 1 < 1 ? null : +page - 1;
    const nextPage = +page + 1 > +lastPage ? null : +page + 1;

    return {
        result,
        lastPage,
        previousPage,
        nextPage,
        totalElements: +total,
        totalPerPage,
        currentPage: +page,
    };
}
