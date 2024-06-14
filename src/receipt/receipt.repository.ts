import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { Receipt } from '../../core/entities/receipt.entity';

@Injectable()
export class ReceiptRepository {
  constructor(@InjectConnection() private readonly knex: Knex,) {}

  async findAll(): Promise<Receipt[]> {
    return this.knex('receipts').select('*');
  }
}