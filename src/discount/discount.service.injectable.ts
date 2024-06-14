import { Injectable } from '@nestjs/common';
import { DiscountRepository } from './discount.repository';
import { DiscountService } from 'core/services/discount.service';

@Injectable()
export class DiscountServiceInjectable extends DiscountService {
  constructor(discountRepository: DiscountRepository) {
    super(discountRepository)
  }
}