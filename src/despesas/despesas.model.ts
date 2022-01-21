import { Table, Column, DataType, Model } from "sequelize-typescript";

@Table
export class Despesa extends Model<Despesa> {

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