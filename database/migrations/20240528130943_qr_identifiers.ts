import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('qr_identifiers', table => {
        table.bigIncrements('id').primary();
        table.string('code', 256).notNullable().unique();
        table.string('image', 256).unique();
        table.string('name', 256);
        table.text('description');

        table.bigInteger('cashbox_id').notNullable().references('id').inTable('cashboxes').onDelete("CASCADE");
        table.timestamps(true, true)
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('qr_identifiers')
}

