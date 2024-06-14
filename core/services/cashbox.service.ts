import { Cashbox } from 'core/entities/cashbox.entity';
import { ICashboxRepository } from 'core/repositories/icashbox.repository';

export class CashboxService {
  constructor(private readonly cashboxRepository: ICashboxRepository) {}

  async findAll(): Promise<Cashbox[]> {
    return this.cashboxRepository.findAll();
  }
}