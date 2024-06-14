import { Knex } from "knex";
import { TEST_CASHBOX_ID } from "./cashboxes";

export async function seed(knex: Knex): Promise<void> {
    const qrIdentifiersData = [
        {
            id: 1,
            code: "c7064d3c-2f36-4fe7-ba5b-78e79343816e",
            image: null,
            name: "Тестовый идентификатор",
            description: "Идентификатор тестового кассира",
            cashbox_id: TEST_CASHBOX_ID
        }
    ]
    await knex("qr_identifiers").insert(qrIdentifiersData).onConflict('id').merge();
};
