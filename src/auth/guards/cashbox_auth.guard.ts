import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthServiceInjectable } from '../auth.service.injectable';

@Injectable()
export class CashboxAuthGuard implements CanActivate {
  constructor(private readonly authService: AuthServiceInjectable) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authToken = request.headers['authorization'];

    if (!authToken) {
      throw new UnauthorizedException('No auth token provided');
    }

    const tokenData = await this.authService.validateAuthToken(authToken);
    if (!tokenData || !tokenData.UserID) {
      throw new UnauthorizedException('Invalid auth token');
    }

    request.user = tokenData;
    return true;
  }
}