import { type MigrationInterface, type QueryRunner } from 'typeorm'

export class AddCustomerTable1700752559815 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE customer (
                id SERIAL PRIMARY KEY,
                first_name VARCHAR(255) NOT NULL,
                last_name VARCHAR(255) NOT NULL,
                age INT NOT NULL
            );
        `)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE customer;
        `)
  }
}
