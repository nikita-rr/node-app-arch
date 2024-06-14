import { hash } from "bcrypt";
import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    const adminData = {
        id: 1,
        login: "admin",
        password: await hash("password", 10),
        first_name: "Admin",
        role: "ADMIN"
    }
    await knex("users").insert(adminData).onConflict('id').merge();
};
