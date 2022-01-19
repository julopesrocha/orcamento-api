import { Table, Column, DataType, Model } from "sequelize-typescript";

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
}