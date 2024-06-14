import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { Product } from '../../core/entities/product.entity';

@Injectable()
export class ProductRepository {
  constructor(@InjectConnection() private readonly knex: Knex,) {}

  async findAll(): Promise<Product[]> {
    return this.knex('products').select('*');
  }
}