import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';

import { IDeviceRepository } from 'core/repositories/idevice.repository';
import { Device } from 'core/entities/device.entity';

@Injectable()
export class DeviceRepository implements IDeviceRepository {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async findAll(): Promise<Device[]> {
    return this.knex('devices').select('*');
  }
}