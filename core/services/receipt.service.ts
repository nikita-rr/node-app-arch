import { Receipt } from 'core/entities/receipt.entity';
import { IReceiptRepository } from 'core/repositories/ireceipt.repository';

export class ReceiptService {
  constructor(private readonly receiptRepository: IReceiptRepository) {}

  async findAll(): Promise<Receipt[]> {
    return this.receiptRepository.findAll();
  }
}