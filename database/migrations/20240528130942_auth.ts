import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('auth', function(table) {
        table.bigIncrements('id').primary();
        table.bigInteger('user_id').references('id').inTable('users').onDelete('CASCADE');
        table.bigInteger('cashbox_id').references('id').inTable('cashboxes').onDelete('CASCADE');
        table.string('auth_token').notNullable();
        table.timestamp('expires_at');
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('auth')
}

