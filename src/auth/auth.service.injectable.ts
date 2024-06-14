import { Injectable } from "@nestjs/common";
import { AuthService } from "core/services/auth.service";
import { AuthRepository } from "./auth.repository";
import { UserRepository } from "src/user/user.repository";
import { CashboxRepository } from "src/cashbox/cashbox.repository";


@Injectable()
export class AuthServiceInjectable extends AuthService {
    constructor(
        authRepository: AuthRepository, 
        userRepository: UserRepository, 
        cashboxRepository: CashboxRepository
    ) {
        super(
            authRepository,
            userRepository,
            cashboxRepository
        )
    }
}