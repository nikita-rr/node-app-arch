import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { User } from '../../core/entities/user.entity';
import { InjectConnection } from 'nest-knexjs';
import { IUserRepository } from 'core/repositories/iuser.repository';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(@InjectConnection() private readonly knex: Knex,) { }

  async findAll(): Promise<User[]> {
    return this.knex('users').select('*');
  }

  async findByLogin(login: string): Promise<User | null> {
    return this.knex('users').select('*').where({ login }).first();
  }
}