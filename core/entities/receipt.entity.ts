export interface Receipt {
    id: number;
    cashbox_id: number;
    user_id?: number;
    is_paid: boolean;
}