import { User } from "core/entities/user.entity";

export interface IUserRepository {

  findAll(): Promise<User[]>;

  findByLogin(login: string): Promise<User | null>;
}