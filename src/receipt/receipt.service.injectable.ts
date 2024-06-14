import { Injectable } from '@nestjs/common';
import { ReceiptRepository } from './receipt.repository';
import { ReceiptService } from 'core/services/receipt.service';

@Injectable()
export class ReceiptServiceInjectable extends ReceiptService {
  constructor(receiptRepository: ReceiptRepository) {
    super(receiptRepository)
  }
}