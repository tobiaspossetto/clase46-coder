import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { ProductService } from './product.service';
@Controller('/api/product/')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Post('create')
  getHello(@Req() data: Request) {
    console.log(data.body);
    return this.productService.createProduct(data.body);
  }

  @Get()
  getAll() {
    return this.productService.getAll();
  }

  @Get('/:id')
  getOne(@Req() data: Request) {
    return this.productService.getOne(data.params.id);
  }
}
