import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('devices', table => {
        table.bigIncrements('id').primary();
        table.enu('type', ['ANDROID', 'IOS']).notNullable();
        table.string('device_uid', 255).nullable().unique();
        table.text('firebase_token').nullable().unique();
        table.jsonb('additional_info').nullable();
        table.bigInteger('user_id').references('id').inTable('users').onDelete('SET NULL');
        table.bigInteger('cashbox_id').references('id').inTable('cashboxes').onDelete('SET NULL');
        table.timestamps(true, true)
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('devices');
}