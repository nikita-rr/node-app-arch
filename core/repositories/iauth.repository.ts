import { CreateAuthDto } from "core/dto/auth/create_auth.dto";
import { Auth } from "core/entities/auth.entity";

export interface IAuthRepository {

  createAuthToken(authData: CreateAuthDto): Promise<boolean>;

  findValidAuthByToken(token: string): Promise<Auth | null>;
}