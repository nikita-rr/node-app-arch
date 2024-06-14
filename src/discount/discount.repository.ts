import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { Discount } from '../../core/entities/discount.entity';
import { InjectConnection } from 'nest-knexjs';

@Injectable()
export class DiscountRepository {
  constructor(@InjectConnection() private readonly knex: Knex,) {}

  async findAll(): Promise<Discount[]> {
    return this.knex('discounts').select('*');
  }
}