import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { ChecklistProcessEntity } from './checklist-process.entity';
import { ChecklistSupplyEntity } from './checklist-supply.entity';

@Entity('CHECKLIST_FORM')
export class ChecklistFormEntity {
    @ManyToOne(() => ChecklistProcessEntity, (process) => process.forms)
    process: ChecklistProcessEntity;

    @OneToMany(() => ChecklistSupplyEntity, (supply) => supply.form)
    supplies: ChecklistSupplyEntity[];

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'int' })
    processId: number;

    @Column({ type: 'int' })
    vehicleCode1: number;

    @Column({ type: 'varchar', length: 100 })
    vehicleDescription1: string;

    @Column({ type: 'varchar', length: 100 })
    vehicleClass1: string;

    @Column({ type: 'varchar', length: 10 })
    vehiclePlate1: string;

    @Column({ type: 'int' })
    initialOdometer1: number;

    @Column({ type: 'int' })
    initialHorimeter1: number;

    @Column({ type: 'int', nullable: true })
    vehicleCode2: number;

    @Column({ type: 'varchar', length: 100, nullable: true })
    vehicleDescription2: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    vehicleClass2: string;

    @Column({ type: 'varchar', length: 10, nullable: true })
    vehiclePlate2: string;

    @Column({ type: 'int', nullable: true })
    initialOdometer2: number;

    @Column({ type: 'int', nullable: true })
    initialHorimeter2: number;

    @Column({ type: 'int' })
    chargingCode: number;

    @Column({ type: 'timestamp' })
    startDate: Date;

    @Column({ type: 'timestamp' })
    expectedDate: Date;

    @Column({ type: 'timestamp' })
    endDate: Date;

    @Column({ type: 'varchar', length: 100 })
    driver: string;

    @Column({ type: 'varchar', length: 100 })
    deliveryMan: string;

    @Column({ type: 'int' })
    quantityDeliveries: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    cargoValue: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    cargoWeight: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    dailyValue: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    totalDailyExpenses: number;

    @Column({ type: 'varchar', length: 100 })
    route: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    overflows: string;

    @Column({ type: 'boolean' })
    enRouteSupply: boolean;

    @Column({ type: 'int' })
    finalOdometer: number;

    @Column({ type: 'int' })
    finalHorimeter: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    observationsDriver: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    observationsYardAssistantLeader: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    observationsFleetAssistant: string;

    @Column({ type: 'boolean' })
    truckApproved: boolean;

    @CreateDateColumn()
    createdAt: Date;
}
