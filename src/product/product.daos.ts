import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.schema';
import { Model } from 'mongoose';
@Injectable()
export class ProductDaos {
  constructor(@InjectModel('Product') private productModule) {}
  async createProduct(data: any) {
    try {
      const result = await this.productModule.create(data);
      return { error: false, data: result };
    } catch (error) {
      console.error(error);
      return {
        error: true,
        message: 'Ocurrio un error itnentando crear el producto',
      };
    }
  }

  async getAll() {
    try {
      const result = await this.productModule.find();
      return { error: false, data: result };
    } catch (error) {
      console.error(error);
      return {
        error: true,
        message: 'Ocurrio un error itnentando listar los productos',
      };
    }
  }

  async getOne(id: string) {
    try {
      const result = await this.productModule.findById(id);
      return { error: false, data: result };
    } catch (error) {
      console.error(error);
      return {
        error: true,
        message: 'Ocurrio un error itnentando obtener el producto',
      };
    }
  }
}
