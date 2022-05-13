import {  u128, context, PersistentVector } from "near-sdk-as";

@nearBindgen
export class Comentario{
    Comentario : String;
    Lugar_Comentario : String;
    propietario : String;
    Titulo : String;
    constructor(comentario : String,  Lugar_comentario : String, Titulo: String){
        this.Comentario = comentario;
        this.propietario = context.sender;
        this.Lugar_Comentario = Lugar_comentario;
        this.Titulo = Titulo;
    }


    
}
export const comentariosTotal = new PersistentVector<Comentario>("v");