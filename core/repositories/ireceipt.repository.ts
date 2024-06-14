import { Receipt } from "core/entities/receipt.entity";

export interface IReceiptRepository {

  findAll(): Promise<Receipt[]>
}