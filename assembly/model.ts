import { PersistentUnorderedMap, u128, context, PersistentVector } from "near-sdk-as";
export class Comentario{
    Comentario : String;
    Imagen : ImageBitmap;
    Donacion : u128;
    Lugar_Comentario : String;
    IdComentario : String;
    propietario : String;
    Titulo : String;
    constructor(comentario : String, Imagen : ImageBitmap, Donacion: u128, Lugar_comentario : String, Titulo: String){
        this.Comentario = comentario;
        this.propietario = context.sender;
        this.Donacion = Donacion;
        this.Lugar_Comentario = Lugar_comentario;
        this.Imagen = Imagen;
        this.Titulo = Titulo;
    }


    
}
export const comentariosTotal = new PersistentVector<Comentario>("COMENTARIOS");