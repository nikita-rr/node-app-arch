export interface QrIdentifier {
    id: number;
    code: string;
    image?: string;
    name?: string;
    description?: string;
    cashbox_id: number;
    created_at: string;
    updated_at: string;
}