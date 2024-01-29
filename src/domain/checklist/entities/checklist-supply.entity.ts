import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { ChecklistFormEntity } from './checklist-form.entity';

@Entity('CHECKLIST_SUPPLY')
export class ChecklistSupplyEntity {
    @OneToOne(() => ChecklistFormEntity, (form) => form.supplies)
    @JoinColumn()
    form: ChecklistFormEntity;

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'int' })
    formId: number;

    @Column({ type: 'varchar', length: 10 })
    type: string;

    @Column({ type: 'timestamp' })
    date: Date;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    liters: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    value: number;

    @Column({ type: 'int' })
    odometer: number;

    @Column({ type: 'varchar', length: 100 })
    gasStation: string;

    @Column({ type: 'varchar', length: 100 })
    workplace: string;

    @Column({ type: 'int' })
    noteCode: number;

    @Column({ type: 'boolean' })
    completedTank: boolean;
}
