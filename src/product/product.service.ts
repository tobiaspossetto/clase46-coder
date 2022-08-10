import { Injectable } from '@nestjs/common';
import { ProductDaos } from './product.daos';
@Injectable()
export class ProductService {
  constructor(private productDaos: ProductDaos) {}
  createProduct(data: any) {
    return this.productDaos.createProduct(data);
  }
  getAll() {
    return this.productDaos.getAll();
  }
  getOne(id: string) {
    return this.productDaos.getOne(id);
  }
}
