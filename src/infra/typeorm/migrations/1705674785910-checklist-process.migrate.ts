import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Migrate1705674785910 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'CHECKLIST_PROCESS',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'fluigCode',
                        type: 'int',
                    },
                    {
                        name: 'chargingCode',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'startDate',
                        type: 'timestamp',
                    },
                    {
                        name: 'endDate',
                        type: 'timestamp',
                        isNullable: true,
                    },
                    {
                        name: 'status',
                        type: 'varchar',
                        length: '50',
                    },
                    {
                        name: 'updatedAt',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP',
                        onUpdate: 'CURRENT_TIMESTAMP',
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('CHECKLIST_PROCESS');
    }
}
