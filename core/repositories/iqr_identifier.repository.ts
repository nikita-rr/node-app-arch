import { QrIdentifier } from "core/entities/qr_identifier.entity";

export interface IQrIdentifierRepository {
  findAll(): Promise<QrIdentifier[]>
}