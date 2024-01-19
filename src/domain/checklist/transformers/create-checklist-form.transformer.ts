import { ChecklistFormEntity } from '../entities';
import { ICreateChecklistFormReq } from '../interfaces';

export function mapCreateChecklistForm(processId: number, data: ICreateChecklistFormReq): ChecklistFormEntity {
    const entity = new ChecklistFormEntity();

    entity.processId = processId;

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            entity[key] = data[key];
        }
    }

    return entity;
}
