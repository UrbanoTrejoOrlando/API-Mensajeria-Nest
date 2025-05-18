import { Prop, Schema } from "@nestjs/mongoose";

// Creacion de un decorador
@Schema()
// Creacion del esquema de la base de datos
export class Productos{
    @Prop({required:true}) nombre:string;
    @Prop({required:true}) precio:number;
    @Prop({required:true}) stock:number;
}
