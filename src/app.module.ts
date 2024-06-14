import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexModule } from 'nest-knexjs';
import { UserModule } from './user/user.module';
import { DeviceModule } from './device/device.module';
import { ProductModule } from './product/product.module';
import { ReceiptModule } from './receipt/receipt.module';
import { DiscountModule } from './discount/discount.module';
import config from 'src/../knexfile' 
import { QrIdentifierModule } from './qr_identifier/qr_identifier.module';
import { AuthModule } from './auth/auth.module';
import { CashboxModule } from './cashbox/cashbox.module';
@Module({
  imports: [
    KnexModule.forRoot({ config }),
    UserModule,
    DeviceModule,
    ProductModule,
    ReceiptModule,
    DiscountModule,
    QrIdentifierModule,
    CashboxModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
