import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { ProductService } from 'core/services/product.service';

@Injectable()
export class ProductServiceInjectable extends ProductService {
  constructor(productRepository: ProductRepository) {
    super(productRepository)
  }
}