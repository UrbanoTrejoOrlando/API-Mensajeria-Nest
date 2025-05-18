import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { ProductosModule } from './productos/productos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // Agregar mongodb a la api
    MongooseModule.forRoot("mongodb://localhost:27017"),
    UsersModule,
    ProductosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
