export class Proyecto {
    id: number;
    subtitulo: string;
    titulo: string;
    url: string;
    url_imagen: string;
    
    constructor(id: number, titulo:string, subtitulo:string, url:string, url_imagen:string){
        this.id = id;
        this.subtitulo = subtitulo;
        this.titulo = titulo;
        this.url = url;
        this.url_imagen = url_imagen;
    }
}
