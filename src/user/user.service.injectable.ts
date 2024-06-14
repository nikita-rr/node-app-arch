import { Injectable } from '@nestjs/common';
import { UserService } from 'core/services/user.service';
import { UserRepository } from './user.repository';

@Injectable()
export class UserServiceInjectable extends UserService {
  constructor(userRepository: UserRepository) {
    super(userRepository)
  }
}