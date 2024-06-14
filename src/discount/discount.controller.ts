import { Controller, Get } from '@nestjs/common';
import { DiscountServiceInjectable } from './discount.service.injectable';

@Controller()
export class DiscountController {
  constructor(private readonly discountService: DiscountServiceInjectable) {}

  @Get('/discounts')
  async getAllDiscounts() {
    const discounts = await this.discountService.findAll()
    return discounts;
  }
}
