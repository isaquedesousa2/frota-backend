import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Migrate1704477102544 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users_permissions',
                columns: [
                    { name: 'id', type: 'int', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'user', type: 'int' },
                    { name: 'permission', type: 'int' },
                    { name: 'updatedAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' },
                    { name: 'createdAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'users_permissions',
            new TableForeignKey({
                columnNames: ['user'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'users_permissions',
            new TableForeignKey({
                columnNames: ['permission'],
                referencedColumnNames: ['id'],
                referencedTableName: 'permissions',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('users_permissions');
        const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('user') !== -1);
        await queryRunner.dropForeignKey('users_permissions', foreignKey);

        await queryRunner.dropTable('users_permissions');
    }
}
