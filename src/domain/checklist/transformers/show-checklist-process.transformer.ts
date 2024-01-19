import { ChecklistProcessEntity } from '../entities';
import { mapShowChecklistForm } from './show-checklist-form.transformer';

export function mapShowChecklistProcess(data: ChecklistProcessEntity) {
    return {
        ...data,
        forms: data.forms.map(mapShowChecklistForm),
        histories: data.histories,
    };
}
