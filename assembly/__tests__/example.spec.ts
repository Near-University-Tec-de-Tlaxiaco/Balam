
import { logging, PersistentUnorderedMap, u128} from "near-sdk-as";
import { Comentario, comentariosTotal } from "../model";
import {SetComentario, getComentarios, getComentario, comentarioLenght, EliminarComentario} from ".."
const comentario = 'Bonito lugar';
const Lugar_comentario = 'Chalcatongo';
const Titulo = 'Recomiendo este lugar';

const comentarioIndexx = comentariosTotal.length;
let ComentarioNuevo = new Comentario(comentario, Lugar_comentario,Titulo);


const data = new Array<Comentario>(comentarioIndexx);
for(let i=0; i < comentarioIndexx; i++) {
    data[i] = comentariosTotal[i]
}

describe("Subir Comentario", () => {
  it('Si el nuevo comentario que se sube es el correcto', () => {
      expect(SetComentario('Bonito lugar', 'Chalcatongo', 'Recomiendo este lugar')).toStrictEqual(ComentarioNuevo);
  })
})




describe("get comentario", () => {
  it('retorna los comentarios', () => {
      expect(getComentarios()).toStrictEqual(data)
  })
})

