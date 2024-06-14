import { Knex }from "knex";

export async function up(knex: Knex): Promise<void> {
    // Чеки
    return knex.schema.createTable('receipts', table => {
        table.bigIncrements('id').primary();
        table.bigInteger('cashbox_id').notNullable().references('id').inTable('cashboxes').onDelete('CASCADE');
        table.bigInteger('user_id').references('id').inTable('users').onDelete('SET NULL');
        table.boolean('is_paid').defaultTo(false);

        table.timestamps(true, true)
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('receipts');
}