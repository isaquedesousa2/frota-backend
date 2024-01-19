import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Migrate1705674834802 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'CHECKLIST_FORM',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'processId',
                        type: 'int',
                    },
                    {
                        name: 'vehicleCode1',
                        type: 'int',
                    },
                    {
                        name: 'vehicleDescription1',
                        type: 'varchar',
                        length: '100',
                    },
                    {
                        name: 'vehicleClass1',
                        type: 'varchar',
                        length: '100',
                    },
                    {
                        name: 'vehiclePlate1',
                        type: 'varchar',
                        length: '10',
                    },
                    {
                        name: 'initialOdometer1',
                        type: 'int',
                    },
                    {
                        name: 'initialHorimeter1',
                        type: 'int',
                    },
                    {
                        name: 'vehicleCode2',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'vehicleDescription2',
                        type: 'varchar',
                        length: '100',
                        isNullable: true,
                    },
                    {
                        name: 'vehicleClass2',
                        type: 'varchar',
                        length: '100',
                        isNullable: true,
                    },
                    {
                        name: 'vehiclePlate2',
                        type: 'varchar',
                        length: '10',
                        isNullable: true,
                    },
                    {
                        name: 'initialOdometer2',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'initialHorimeter2',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'chargingCode',
                        type: 'int',
                    },
                    {
                        name: 'startDate',
                        type: 'timestamp',
                    },
                    {
                        name: 'expectedDate',
                        type: 'timestamp',
                    },
                    {
                        name: 'endDate',
                        type: 'timestamp',
                    },
                    {
                        name: 'driver',
                        type: 'varchar',
                        length: '100',
                    },
                    {
                        name: 'deliveryMan',
                        type: 'varchar',
                        length: '100',
                    },
                    {
                        name: 'quantityDeliveries',
                        type: 'int',
                    },
                    {
                        name: 'cargoValue',
                        type: 'decimal',
                        scale: 2,
                    },
                    {
                        name: 'cargoWeight',
                        type: 'decimal',
                        scale: 2,
                    },
                    {
                        name: 'dailyValue',
                        type: 'decimal',
                        scale: 2,
                    },
                    {
                        name: 'totalDailyExpenses',
                        type: 'decimal',
                        precision: 10,
                        scale: 2,
                    },
                    {
                        name: 'route',
                        type: 'varchar',
                        length: '100',
                    },
                    {
                        name: 'overflows',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'enRouteSupply',
                        type: 'boolean',
                    },
                    {
                        name: 'finalOdometer',
                        type: 'int',
                    },
                    {
                        name: 'finalHorimeter',
                        type: 'int',
                    },
                    {
                        name: 'observationsDriver',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'observationsYardAssistantLeader',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'observationsFleetAssistant',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                    },
                    {
                        name: 'truckApproved',
                        type: 'boolean',
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP',
                    },
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'CHECKLIST_FORM',
            new TableForeignKey({
                columnNames: ['processId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'CHECKLIST_PROCESS',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('CHECKLIST_FORM');
        const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('processId') !== -1);

        if (foreignKey) {
            await queryRunner.dropForeignKey('CHECKLIST_FORM', foreignKey);
        }

        await queryRunner.dropTable('CHECKLIST_FORM');
    }
}
