import { Cashbox } from "core/entities/cashbox.entity";

export interface ICashboxRepository {

  findAll(): Promise<Cashbox[]>;

  findByLogin(login: string): Promise<Cashbox | null>;
}