import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Migrate1705674937362 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'CHECKLIST_HISTORY',
                columns: [
                    { name: 'id', type: 'int', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'processId', type: 'int' },
                    { name: 'formId', type: 'int' },
                    { name: 'status', type: 'boolean' },
                    { name: 'description', type: 'varchar', length: '255' },
                    { name: 'createdAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'CHECKLIST_HISTORY',
            new TableForeignKey({
                columnNames: ['processId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'CHECKLIST_PROCESS',
                onDelete: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'CHECKLIST_HISTORY',
            new TableForeignKey({
                columnNames: ['formId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'CHECKLIST_FORM',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('CHECKLIST_HISTORY');
        const foreignKeyProcess = table.foreignKeys.find((fk) => fk.columnNames.indexOf('processId') !== -1);
        const foreignKeyForm = table.foreignKeys.find((fk) => fk.columnNames.indexOf('formId') !== -1);

        if (foreignKeyProcess) {
            await queryRunner.dropForeignKey('CHECKLIST_HISTORY', foreignKeyProcess);
        }

        if (foreignKeyForm) {
            await queryRunner.dropForeignKey('CHECKLIST_HISTORY', foreignKeyForm);
        }

        await queryRunner.dropTable('CHECKLIST_HISTORY');
    }
}
