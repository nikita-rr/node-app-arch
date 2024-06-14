import { DeviceService } from 'core/services/device.service';
import { DeviceRepository } from './device.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeviceServiceInjectable extends DeviceService {

  constructor(deviceRepository: DeviceRepository) {
    super(deviceRepository)
  }

}