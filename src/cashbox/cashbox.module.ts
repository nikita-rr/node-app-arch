import { Module } from '@nestjs/common';
import { CashboxController } from './cashbox.controller';
import { CashboxRepository } from './cashbox.repository';
import { CashboxServiceInjectable } from './cashbox.service.injectable';

@Module({
  controllers: [CashboxController],
  providers: [CashboxServiceInjectable, CashboxRepository],
  exports: [CashboxRepository]
})
export class CashboxModule {}
