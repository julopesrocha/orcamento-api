import { Table, Column, DataType, Model } from "sequelize-typescript";
//import { Model } from "node_modules/sequelize/types";


@Table
export class Receita extends Model<Receita> {

    @Column({
        type: DataType.STRING(60),
        allowNull: false,
    })
    descricao: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false
    })
    valor: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    data: Date;

    /*
    constructor(descricao: string, valor: number, data: Date) {
        this.descricao = descricao;
        this.valor = valor;
        this.data = new Date;
    }
    */
}