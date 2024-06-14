import { Product } from "core/entities/product.entity";

export interface IProductRepository {

  findAll(): Promise<Product[]>
}