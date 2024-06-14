import { Controller, Get } from '@nestjs/common';
import { CashboxServiceInjectable } from './cashbox.service.injectable';

@Controller()
export class CashboxController {
  constructor(private readonly cashboxService: CashboxServiceInjectable) {}

  @Get('/cashboxs')
  async getAllCashboxs() {
    const cashboxs = await this.cashboxService.findAll()
    return cashboxs;
  }
}
