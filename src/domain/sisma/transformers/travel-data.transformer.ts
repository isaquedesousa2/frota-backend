import { CreateChecklistFormDTO } from '../../checklist/dto';
import { CreateTravelDTO } from '../dto/travel';

export function mapTravelData(data: CreateChecklistFormDTO): CreateTravelDTO {
    return {
        vehicleCode: data.vehicleCode1 ? data.vehicleCode1 : data.vehicleCode2,
        initialOdometer: data.initialHorimeter1 ? data.initialHorimeter1 : data.initialHorimeter2,
        horimeter: data.finalHorimeter,
        observation: data.observationsDriver,
        ...data,
    };
}
