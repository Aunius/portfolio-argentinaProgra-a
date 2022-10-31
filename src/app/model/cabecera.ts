export class Cabecera{
    persona: string;
    saludo: string;
    url_persona: string;
    
    constructor(persona: string, saludo: string, url_persona: string){
        this.persona = persona;
        this.saludo = saludo;
        this.url_persona = url_persona;
    }
}