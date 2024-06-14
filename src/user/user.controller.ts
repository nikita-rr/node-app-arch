import { Controller, Get } from '@nestjs/common';
import { UserServiceInjectable } from './user.service.injectable';

@Controller()
export class UserController {
  constructor(private readonly userService: UserServiceInjectable) {}

  @Get('/users')
  async getAllUsers() {
    const users = await this.userService.findAll()
    return users;
  }
}
