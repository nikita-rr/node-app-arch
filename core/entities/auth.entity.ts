export interface Auth {
    id: number,
    user_id?: number,
    cashbox_id?: number,
    auth_token: string,
    expires_at?: Date,

    created_at: Date,
    updated_at: Date,
}