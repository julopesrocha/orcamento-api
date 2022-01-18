export class Receita {
    id: number;
    descricao: string;
    valor: number;
    data: Date;

    constructor(descricao: string, valor: number, data: Date) {
        this.descricao = descricao;
        this.valor = valor;
        this.data = new Date;
    }
}