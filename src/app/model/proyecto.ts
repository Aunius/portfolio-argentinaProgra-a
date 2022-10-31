export class Proyecto {
    id?: number;
    subtitulo: string;
    titulo: string;
    url: string;
    url_imagen: string;
    
    constructor(subtitulo:string, titulo:string, url:string, url_imagen:string){
        this.subtitulo = subtitulo;
        this.titulo = titulo;
        this.url = url;
        this.url_imagen = url_imagen;
    }
}
