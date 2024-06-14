import { Injectable } from '@nestjs/common';
import { CashboxService } from 'core/services/cashbox.service';
import { CashboxRepository } from './cashbox.repository';

@Injectable()
export class CashboxServiceInjectable extends CashboxService {
  constructor(cashboxRepository: CashboxRepository) {
    super(cashboxRepository)
  }
}