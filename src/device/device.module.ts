import { Module } from '@nestjs/common';
import { DeviceController } from './device.controller';
import { DeviceRepository } from './device.repository';
import { DeviceServiceInjectable } from './device.service.injectable';

@Module({
    controllers: [DeviceController],
    providers: [DeviceServiceInjectable, DeviceRepository]
})
export class DeviceModule {}
