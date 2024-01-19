import { ChecklistFormEntity } from '../entities';

export function mapShowChecklistForm(data: ChecklistFormEntity) {
    const response = {
        id: data.id,
        processId: data.processId,
        vehicleOne: {
            vehicleCode: data.vehicleCode1,
            vehicleDescription: data.vehicleDescription1,
            vehicleClass: data.vehicleClass1,
            vehiclePlate: data.vehiclePlate1,
            initialOdometer: data.initialOdometer1,
            initialHorimeter: data.initialHorimeter1,
        },
        vehicleTwo: data.vehicleCode2 && {
            vehicleCode: data.vehicleCode2,
            vehicleDescription: data.vehicleDescription2,
            vehicleClass: data.vehicleClass2,
            vehiclePlate: data.vehiclePlate2,
            initialOdometer: data.initialOdometer2,
            initialHorimeter: data.initialHorimeter2,
        },
        ...data,
    };

    delete response.vehicleCode1;
    delete response.vehicleDescription1;
    delete response.vehicleClass1;
    delete response.vehiclePlate1;
    delete response.initialOdometer1;
    delete response.initialHorimeter1;
    delete response.vehicleCode2;
    delete response.vehicleDescription2;
    delete response.vehicleClass2;
    delete response.vehiclePlate2;
    delete response.initialOdometer2;
    delete response.initialHorimeter2;

    return response;
}
