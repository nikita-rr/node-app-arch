import { Product } from 'core/entities/product.entity';
import { IProductRepository } from 'core/repositories/iproduct.repository';

export class ProductService {
  constructor(private readonly productRepository: IProductRepository) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
}