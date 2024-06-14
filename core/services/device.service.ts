import { Device } from 'core/entities/device.entity';
import { IDeviceRepository } from 'core/repositories/idevice.repository';

export class DeviceService {
  constructor(private readonly deviceRepository: IDeviceRepository) {}

  async findAll(): Promise<Device[]> {
    return this.deviceRepository.findAll();
  }
}