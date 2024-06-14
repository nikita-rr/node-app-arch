export interface Cashbox {
    id: number,
    name?: string,
    description?: string,
    address?: string,
    serial?: string,
    login: string,
    password: string,

    created_at: string,
    updated_at: string,
}