import { ChecklistHistoryEntity } from '../entities';
import { ICreateCheckListHistoryReq } from '../interfaces';

export function mapCreateChecklistHistory(processId: number, formId: number, data: ICreateCheckListHistoryReq): ChecklistHistoryEntity {
    const entity = new ChecklistHistoryEntity();

    entity.formId = formId;
    entity.processId = processId;
    entity.description = data.status ? 'Viagem salva com sucesso!' : data.description;
    entity.status = data.status;

    return entity;
}
