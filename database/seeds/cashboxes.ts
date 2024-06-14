import { hash } from "bcrypt";
import { Knex } from "knex";

export const TEST_CASHBOX_ID = 1

export async function seed(knex: Knex): Promise<void> {
    const cashboxData = {
        id: TEST_CASHBOX_ID,
        login: "cashbox",
        password: await hash("password", 10),
        name: "Тестовы кассовый аппарат",
    }
    await knex("cashboxes").insert(cashboxData).onConflict('id').merge();
};
