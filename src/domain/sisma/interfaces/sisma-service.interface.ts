import { CreateChecklistFormDTO } from '../../checklist/dto';

export interface ISismaService {
    createTravel(data: CreateChecklistFormDTO): void;
}
