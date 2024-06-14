import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { Auth } from '../../core/entities/auth.entity';
import { CreateAuthDto } from '../../core/dto/auth/create_auth.dto';
import { IAuthRepository } from 'core/repositories/iauth.repository';

@Injectable()
export class AuthRepository implements IAuthRepository {
  constructor(@InjectConnection() private readonly knex: Knex) { }

  async createAuthToken(authData: CreateAuthDto) {
    const result = await this.knex('auth').insert({
      cashbox_id: authData.cashbox_id,
      auth_token: authData.auth_token,
      expires_at: authData.expires_at,
    })
    return result?.length ? true : false;
  }

  async findValidAuthByToken(token: string): Promise<Auth | null> {
    return await this.knex('auth')
      .where({ AuthToken: token })
      .andWhere('expires_at', '>', new Date())
      .first();
  }
}