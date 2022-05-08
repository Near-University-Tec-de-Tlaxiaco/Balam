import { logging, PersistentUnorderedMap } from "near-sdk-as";
export const comentarios = new PersistentUnorderedMap<string, string>("COMENTARIOS");

// escitura de comentarios
export function setComentario(id: string, TituloComentario: string): void {
    comentarios.set(id, TituloComentario);
}

//lectura de comentarios
export function getComentario(id: string): string | null {
    return comentarios.get(id);
}

