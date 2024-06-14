import * as bcrypt from 'bcrypt';

import { Cashbox } from 'core/entities/cashbox.entity';
import { User } from 'core/entities/user.entity';
import { IAuthRepository } from 'core/repositories/iauth.repository';
import { ICashboxRepository } from 'core/repositories/icashbox.repository';
import { IUserRepository } from 'core/repositories/iuser.repository';

export class AuthService {
  constructor(
    private readonly authRepository: IAuthRepository, 
    private readonly userRepository: IUserRepository, 
    private readonly cashboxRepository: ICashboxRepository,
  ) { }

  // Методы для работы с кассовыми аппаратами
  async validateCashbox(login: string, password: string): Promise<Cashbox> {
    const cashbox = await this.cashboxRepository.findByLogin(login)

    if (!cashbox || !await bcrypt.compare(password, cashbox.password)) {
      throw new Error('Неверный логин или пароль');
    }

    return cashbox;
  }

  async createCashboxAuthToken(cashboxId: number): Promise<string> {
    const authToken = this.generateToken();
    const expiresAt = new Date();
    expiresAt.setMonth(expiresAt.getMonth() + 6);

    await this.authRepository.createAuthToken({
      auth_token: authToken,
      expires_at: expiresAt,
      cashbox_id: cashboxId
    });

    return authToken;
  }

  // Методы для работы с пользователями
  async validateUser(login: string, password: string): Promise<User> {
    const user = await this.userRepository.findByLogin(login)

    if (!user || !await bcrypt.compare(password, user.password)) {
      throw new Error('Неверный логин или пароль');
    }

    return user;
  }

  async createUserAuthToken(userId: number): Promise<string> {
    const authToken = this.generateToken();
    const expiresAt = new Date();
    expiresAt.setMonth(expiresAt.getMonth() + 6);

    await this.authRepository.createAuthToken({
      user_id: userId,
      auth_token: authToken,
      expires_at: expiresAt,
    });

    return authToken;
  }

  private generateToken(): string {
    return Math.random().toString(36).substr(2);
  }

  async validateAuthToken(authToken: string): Promise<any> {
    const tokenData = await this.authRepository.findValidAuthByToken(authToken);
  
    if (!tokenData) {
      throw new Error('Invalid or expired auth token');
    }
  
    return tokenData;
  }
}