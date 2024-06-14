import { Module } from '@nestjs/common';
import { ReceiptController } from './receipt.controller';
import { ReceiptRepository } from './receipt.repository';
import { ReceiptServiceInjectable } from './receipt.service.injectable';

@Module({
    controllers: [ReceiptController],
    providers: [ReceiptServiceInjectable, ReceiptRepository]
})
export class ReceiptModule {}
