import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { ChecklistHistoryEntity } from './checklist-history.entity';
import { ChecklistFormEntity } from './checklist-form.entity';

@Entity('CHECKLIST_PROCESS')
export class ChecklistProcessEntity {
    @OneToMany(() => ChecklistHistoryEntity, (history) => history.process)
    histories?: ChecklistHistoryEntity[];

    @OneToMany(() => ChecklistFormEntity, (forms) => forms.process)
    forms?: ChecklistFormEntity[];

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'int' })
    fluigCode: number;

    @Column({ type: 'int', nullable: true })
    chargingCode?: number;

    @Column({ type: 'timestamp' })
    startDate: Date;

    @Column({ type: 'timestamp', nullable: true })
    endDate?: Date;

    @Column({ type: 'varchar', length: 50 })
    status: string;

    @UpdateDateColumn()
    updatedAt: Date;

    @CreateDateColumn()
    createdAt: Date;
}
