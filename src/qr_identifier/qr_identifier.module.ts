import { Module } from '@nestjs/common';
import { QrIdentifierRepository } from './qr_identifier.repository';
import { QrIdentifierServiceInjectable } from './qr_identifier.service.injectable';

@Module({
    providers: [QrIdentifierServiceInjectable, QrIdentifierRepository]
})
export class QrIdentifierModule {}
