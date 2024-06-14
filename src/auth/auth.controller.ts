import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserAuthGuard } from './guards/user_auth.guard';
import { CashboxAuthGuard } from './guards/cashbox_auth.guard';
import { AuthServiceInjectable } from './auth.service.injectable';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthServiceInjectable) {}


  @Post('login/cashbox')
  async loginCashbox(@Body('login') login: string, @Body('password') password: string): Promise<{ authToken: string }> {
    const cashbox = await this.authService.validateCashbox(login, password);
    const authToken = await this.authService.createCashboxAuthToken(cashbox.id);

    return { authToken };
  }

  @Post('login/user')
  async loginUser(@Body('login') login: string, @Body('password') password: string): Promise<{ authToken: string }> {
    const user = await this.authService.validateUser(login, password);
    const authToken = await this.authService.createUserAuthToken(user.id);

    return { authToken };
  }

  @Get('user-protected')
  @UseGuards(UserAuthGuard)
  async userProtectedRoute() {
    return { message: 'This route is protected and only accessible by authenticated users' };
  }

  @Get('cash-register-protected')
  @UseGuards(CashboxAuthGuard)
  async cashboxrProtectedRoute() {
    return { message: 'This route is protected and only accessible by authenticated cash registers' };
  }
}
