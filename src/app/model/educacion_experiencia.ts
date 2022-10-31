export class EducacionExperiencia{
    id: number;
    texto: string;
    tipo: string;
    url_imagen: string;
    
    constructor(id: number, texto: string, tipo: string, url_imagen: string){
        this.id = id;
        this.texto = texto;
        this.tipo = tipo;
        this.url_imagen = url_imagen;
    }
}