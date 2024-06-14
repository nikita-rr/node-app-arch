import { Discount } from "core/entities/discount.entity";

export interface IDiscountRepository {

  findAll(): Promise<Discount[]>
}