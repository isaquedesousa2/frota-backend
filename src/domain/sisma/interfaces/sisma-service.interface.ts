import { CreateTravelDTO } from '../dto/travel';

export interface ISismaService {
    createTravel(data: CreateTravelDTO): void;
}
