import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { ProductServiceInjectable } from './product.service.injectable';

@Module({
    controllers: [ProductController],
    providers: [ProductServiceInjectable, ProductRepository]
})
export class ProductModule {}
