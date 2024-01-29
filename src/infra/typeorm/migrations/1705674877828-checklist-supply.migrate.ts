import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Migrate1705674877828 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'CHECKLIST_SUPPLY',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'formId',
                        type: 'int',
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                        length: '10',
                    },
                    {
                        name: 'date',
                        type: 'timestamp',
                    },
                    {
                        name: 'liters',
                        type: 'decimal',
                        scale: 2,
                    },
                    {
                        name: 'value',
                        type: 'decimal',
                        scale: 2,
                    },
                    {
                        name: 'odometer',
                        type: 'decimal',
                        scale: 2,
                    },
                    {
                        name: 'gasStation',
                        type: 'varchar',
                        length: '100',
                    },
                    {
                        name: 'workplace',
                        type: 'varchar',
                        length: '100',
                    },
                    {
                        name: 'noteCode',
                        type: 'int',
                    },
                    {
                        name: 'completedTank',
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
            'CHECKLIST_SUPPLY',
            new TableForeignKey({
                columnNames: ['formId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'CHECKLIST_FORM',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('CHECKLIST_SUPPLY');
        const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('formId') !== -1);

        if (foreignKey) {
            await queryRunner.dropForeignKey('CHECKLIST_SUPPLY', foreignKey);
        }

        await queryRunner.dropTable('CHECKLIST_SUPPLY');
    }
}
