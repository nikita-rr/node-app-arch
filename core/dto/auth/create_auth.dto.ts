import { Auth } from "../../entities/auth.entity";

export interface CreateAuthDto extends Omit<Auth, 'id' |'created_at' | 'updated_at'> {
    
}