import { QrIdentifier } from 'core/entities/qr_identifier.entity';
import { IQrIdentifierRepository } from 'core/repositories/iqr_identifier.repository';

export class QrIdentifierService {
  constructor(private readonly qrIdentifierRepository: IQrIdentifierRepository) {}

  async findAll(): Promise<QrIdentifier[]> {
    return this.qrIdentifierRepository.findAll();
  }
}