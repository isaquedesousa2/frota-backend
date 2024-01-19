import { ChecklistSupplyEntity } from '../entities';
import { ICreateChecklistSupplyReq } from '../interfaces';

export function mapCreateChecklistSupply(formId: number, data: ICreateChecklistSupplyReq): ChecklistSupplyEntity {
    const entity = new ChecklistSupplyEntity();

    entity.formId = formId;

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            entity[key] = data[key];
        }
    }

    return entity;
}
