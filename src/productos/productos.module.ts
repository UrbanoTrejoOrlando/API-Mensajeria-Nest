import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { Producto } from './entities/producto.entity';
import { Productos } from './schemas/producto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name:Producto.name,schema:Productos}]),
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
