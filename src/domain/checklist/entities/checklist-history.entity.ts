import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ChecklistProcessEntity } from './checklist-process.entity';
import { ChecklistFormEntity } from './checklist-form.entity';

@Entity('CHECKLIST_HISTORY')
export class ChecklistHistoryEntity {
    @ManyToOne(() => ChecklistProcessEntity, (process) => process.id)
    process: ChecklistProcessEntity;

    @ManyToOne(() => ChecklistFormEntity, (form) => form.id)
    form: ChecklistFormEntity;

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'int' })
    processId: number;

    @Column({ type: 'int' })
    formId: number;

    @Column({ type: 'boolean' })
    status: boolean;

    @Column({ type: 'varchar', length: 255 })
    description: string;
}
