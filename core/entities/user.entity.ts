export interface User {
    id: number;
    role: UserRoles;
    first_name?: string;
    login: string;
    password: string;
    created_at: string;
    updated_at: string;
}

export enum UserRoles {
    user = "USER",
    admin = "ADMIN",
}