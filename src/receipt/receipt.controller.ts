import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReceiptServiceInjectable } from './receipt.service.injectable';

@Controller()
export class ReceiptController {
  constructor(private readonly receiptService: ReceiptServiceInjectable) {}

  @Post('/receipts')
  async createReceipt(@Body() body) {
    console.log(body);
    
    return body;
  }

  @Get('/receipts')
  async getAllReceipts() {
    const receipts = await this.receiptService.findAll()
    return receipts;
  }
}
