import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('discounts', table => {
        table.bigIncrements('id').primary();
        table.bigInteger('receipt_id').notNullable().references('id').inTable('receipts').onDelete('CASCADE');
        table.bigInteger('product_id').notNullable().references('id').inTable('products').onDelete('CASCADE');
        table.decimal('discount_amount', 10, 2).notNullable();

        table.timestamps(true, true)
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('discounts');
}