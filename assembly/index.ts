import { logging, PersistentUnorderedMap, u128} from "near-sdk-as";
import { Comentario, comentariosTotal } from "./model";
const IndexComentarios = comentariosTotal.length;

// escitura de comentarios
export function SetComentario( comentario : String,  Lugar_comentario : String,Titulo:String): Comentario {
    const newComent = new Comentario( comentario ,   Lugar_comentario,Titulo );
    comentariosTotal.push(newComent);
    logging.log('Comentario subido: ' + newComent.Titulo)
    return newComent;
}

//lectura de tdos los comentarios
export function getComentarios(): Comentario[] {
    const data = new Array<Comentario>(IndexComentarios);
    for(let i = 0; i < IndexComentarios; i++) {
        data[i] = comentariosTotal[i]
    }
    return data;
}

//Buscar Comentario especifico
export function getComentario(ComentarioIndex: i32): Comentario {
    if(comentariosTotal.length < ComentarioIndex) {
        logging.log('EL comentario no existe')
    }
    return comentariosTotal[ComentarioIndex]
}

//total de comentarios almacenados 
export function comentarioLenght(): number {
    return comentariosTotal.length;
}

//eliminar comentario especifico
export function EliminarComentario(ComentarioIndex: i32): bool {
    if(comentariosTotal.length < ComentarioIndex) {
        logging.log('Este comentario aún no existe')
        return false
    }
    comentariosTotal.swap_remove(ComentarioIndex);
    logging.log('Comentario Eliminado');
    return true
}

// buscar comentario
export function BuscarComentario(Buscar: String): Comentario {
    
    for(let i = 0; i < IndexComentarios; i++) {
        if (comentariosTotal[i].Titulo==Buscar) {
            return comentariosTotal[i]
        }
        
    }
    logging.log("No se encontro el comentario")
    return comentariosTotal[IndexComentarios+2];
}

