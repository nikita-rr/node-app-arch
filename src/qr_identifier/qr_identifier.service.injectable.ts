import { Injectable } from '@nestjs/common';
import { QrIdentifierRepository } from './qr_identifier.repository';
import { QrIdentifierService } from 'core/services/qr_identifier.service';

@Injectable()
export class QrIdentifierServiceInjectable extends QrIdentifierService {
  constructor(qrIdentifierRepository: QrIdentifierRepository) {
    super(qrIdentifierRepository)
  }
}