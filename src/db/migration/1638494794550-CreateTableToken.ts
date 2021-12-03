import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableToken1638494794550 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE dbo.[token] (
                [id] INT PRIMARY KEY,
                [hash] VARCHAR(255) NOT NULL,
                [username] VARCHAR(100) NOT NULL
            )`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE [ IF EXISTS ] dbo.[token]`);
    }

}
