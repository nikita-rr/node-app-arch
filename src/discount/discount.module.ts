import { Module } from '@nestjs/common';
import { DiscountController } from './discount.controller';
import { DiscountRepository } from './discount.repository';
import { DiscountServiceInjectable } from './discount.service.injectable';

@Module({
    controllers: [DiscountController],
    providers: [DiscountServiceInjectable, DiscountRepository]
})
export class DiscountModule {}
