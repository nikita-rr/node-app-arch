import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('cashboxes', function(table) {
        table.bigIncrements('id').primary();
        table.string('name', 256);
        table.text('description');
        table.string('address', 512);
        table.string('serial', 256);
        table.string('login').notNullable();
        table.string('password').notNullable();
        table.timestamps(true, true);
      })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('cashboxes')
}

