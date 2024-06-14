import { Controller, Get } from '@nestjs/common';
import { ProductServiceInjectable } from './product.service.injectable';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductServiceInjectable) {}

  @Get('/products')
  async getAllProducts() {
    const products = await this.productService.findAll()
    return products;
  }
}
