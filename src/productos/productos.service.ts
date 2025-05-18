import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Productos } from './schemas/producto.schema';

@Injectable()
export class ProductosService {
  create(createProductoDto: CreateProductoDto) {
    return new Productos();
  }

//Funcion para obtener todos los usuarios
  findAll() {
    return `This action returns all productos`;
  }

//Funcion para obtener un usuario en especifico
  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  //Funcion para actulizar un usuario
  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
