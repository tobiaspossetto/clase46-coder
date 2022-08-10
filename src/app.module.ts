import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { ProductDaos } from './product/product.daos';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Product } from './product/product.schema';
import { ProductSchema } from './product/product.schema';
//decorador para indicar que es un modulo
// ahorra instanciar todas las piezas del modulo manualmente

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://tobias:${process.env.MONGODB_ATLAS_PASSWORD}@cluster0.ulmpx.mongodb.net/ecommerce?retryWrites=true&w=majority`,
    ),
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService, ProductDaos],
})
export class AppModule {}
