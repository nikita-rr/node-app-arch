import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('products', table => {
        table.bigIncrements('id').primary();
        table.string('name', 255).notNullable();
        table.decimal('price', 10, 2).notNullable();

        table.timestamps(true, true)
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('products');
}