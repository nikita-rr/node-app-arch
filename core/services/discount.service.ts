import { Discount } from "core/entities/discount.entity";
import { IDiscountRepository } from "core/repositories/idiscount.repository";

export class DiscountService {
  constructor(private readonly discountRepository: IDiscountRepository) {}

  async findAll(): Promise<Discount[]> {
    return this.discountRepository.findAll();
  }
}