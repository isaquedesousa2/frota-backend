import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Migrate1704477100519 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.createTable(
        //     new Table({
        //         name: 'PERMISSIONS',
        //         columns: [
        //             { name: 'id', type: 'int', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
        //             { name: 'name', type: 'varchar', length: '30' },
        //             { name: 'description', type: 'varchar', length: '300' },
        //             { name: 'updatedAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' },
        //             { name: 'createdAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
        //         ],
        //     }),
        // );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.dropTable('PERMISSIONS');
    }
}
