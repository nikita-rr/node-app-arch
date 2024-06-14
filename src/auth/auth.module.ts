import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { UserModule } from 'src/user/user.module';
import { CashboxModule } from 'src/cashbox/cashbox.module';
import { AuthServiceInjectable } from './auth.service.injectable';

@Module({
    controllers: [AuthController],
    providers: [AuthServiceInjectable, AuthRepository],
    imports: [UserModule, CashboxModule]
})
export class AuthModule {}
