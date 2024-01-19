import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Migrate1704477102544 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.createTable(
        //     new Table({
        //         name: 'USERS_PERMISSIONS',
        //         columns: [
        //             { name: 'id', type: 'int', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
        //             { name: 'user', type: 'int' },
        //             { name: 'permission', type: 'int' },
        //             { name: 'updatedAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' },
        //             { name: 'createdAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
        //         ],
        //     }),
        // );
        // await queryRunner.createForeignKey(
        //     'USERS_PERMISSIONS',
        //     new TableForeignKey({
        //         columnNames: ['user'],
        //         referencedColumnNames: ['id'],
        //         referencedTableName: 'USERS',
        //         onDelete: 'CASCADE',
        //     }),
        // );
        // await queryRunner.createForeignKey(
        //     'USERS_PERMISSIONS',
        //     new TableForeignKey({
        //         columnNames: ['permission'],
        //         referencedColumnNames: ['id'],
        //         referencedTableName: 'PERMISSIONS',
        //         onDelete: 'CASCADE',
        //     }),
        // );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('USERS_PERMISSIONS');
        // const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('user') !== -1);
        // await queryRunner.dropForeignKey('USERS_PERMISSIONS', foreignKey);

        // await queryRunner.dropTable('USERS_PERMISSIONS');
    }
}
