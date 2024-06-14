import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { Cashbox } from '../../core/entities/cashbox.entity';
import { InjectConnection } from 'nest-knexjs';
import { ICashboxRepository } from 'core/repositories/icashbox.repository';

@Injectable()
export class CashboxRepository implements ICashboxRepository {
  constructor(@InjectConnection() private readonly knex: Knex,) { }

  async findAll(): Promise<Cashbox[]> {
    return this.knex('cashboxs').select('*');
  }

  async findByLogin(login: string): Promise<Cashbox | null> {
    return this.knex('cashboxs').select('*').where({ login }).first();
  }
}