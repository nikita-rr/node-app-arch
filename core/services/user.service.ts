import { User } from 'core/entities/user.entity';
import { IUserRepository } from 'core/repositories/iuser.repository';

export class UserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}