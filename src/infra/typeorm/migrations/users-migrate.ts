import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Migrate1703853950905 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    { name: 'id', type: 'int', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'username', type: 'varchar', length: '30' },
                    { name: 'password', type: 'varchar', length: '126' },
                    { name: 'name', type: 'varchar', length: '100' },
                    { name: 'email', type: 'varchar', length: '100' },
                    { name: 'firstAccess', type: 'timestamp', isNullable: true },
                    { name: 'updatedAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' },
                    { name: 'createdAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
