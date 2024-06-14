import { Module, Type } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from 'core/services/user.service';
import { IUserRepository } from 'core/repositories/iuser.repository';
import { UserRepository } from './user.repository';
import { UserServiceInjectable } from './user.service.injectable';




@Module({
  controllers: [UserController],
  providers: [ 
    UserServiceInjectable,
    UserRepository
  ],
  exports: [
    UserRepository
  ]
})
export class UserModule { }
