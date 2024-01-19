import { ChecklistProcessEntity } from '../entities';
import { ECheckListProcessStatus } from '../enums/checklist-process.enum';
import { ICreateChecklistProcessReq } from '../interfaces';

export function mapCreateChecklistProcess({ fluigCode }: ICreateChecklistProcessReq): ChecklistProcessEntity {
    const entity = new ChecklistProcessEntity();

    entity.startDate = new Date();
    entity.status = ECheckListProcessStatus.OPEN;
    entity.fluigCode = fluigCode;

    return entity;
}
