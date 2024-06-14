export interface Device {
    id: number;
    type: DeviceTypes;
    device_uid?: string;
    firebase_token?: string;
    additional_info?: string;
    user_id?: number;
    cashbox_id?: number;
    created_at: string;
    updated_at: string;
}

export enum DeviceTypes {
    android = "ANDROID",
    iOS = "IOS",
}