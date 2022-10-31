export class Skill {
    id: number;
    texto: string;
    tipo: string;
    valor: number;

    constructor(id: number, texto:string, tipo:string, valor:number,){
        this.id = id;
        this.texto = texto;
        this.tipo = tipo;
        this.valor = valor;
    }
}
