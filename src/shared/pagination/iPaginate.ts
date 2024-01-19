export interface IPaginateResponse<Data> {
    result: Data;
    previousPage: number;
    nextPage: number;
    lastPage: number;
    currentPage: number;
    totalElements: number;
    totalPerPage: number;
}

export interface IPaginationParams {
    take: number;
    skip: number;
}
