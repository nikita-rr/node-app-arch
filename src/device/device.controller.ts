import { Controller, Get } from '@nestjs/common';
import { DeviceServiceInjectable } from './device.service.injectable';

@Controller()
export class DeviceController {
  constructor(private readonly deviceService: DeviceServiceInjectable) {}

  @Get('/devices')
  async getAllDevices() {
    const devices = await this.deviceService.findAll()
    return devices;
  }
}
