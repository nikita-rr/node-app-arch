import { Device } from '../entities/device.entity';

export interface IDeviceRepository {
  findAll(): Promise<Device[]> 
}