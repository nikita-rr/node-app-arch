import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', table => {
        table.bigIncrements('id')
        table.enu('role', ['ADMIN', 'USER']).notNullable();
        table.string('first_name', 128)
        table.string('middle_name', 128)
        table.string('last_name', 128)
        table.string('login').notNullable()
        table.string('password').notNullable()
        table.timestamps(true, true)
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users')
}

