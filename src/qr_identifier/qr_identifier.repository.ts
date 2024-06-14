import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { QrIdentifier } from '../../core/entities/qr_identifier.entity';
import { InjectConnection } from 'nest-knexjs';

@Injectable()
export class QrIdentifierRepository {
  constructor(@InjectConnection() private readonly knex: Knex,) {}

  async findAll(): Promise<QrIdentifier[]> {
    return this.knex('qr_identifiers').select('*');
  }
}