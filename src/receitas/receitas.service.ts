import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Receita } from "./receitas.module";

@Injectable()
export class ReceitasService {
    constructor(
        @InjectModel(Receita)
        private receitaModel: typeof Receita
    ) {}

    async obterTodas(): Promise<Receita[]> {
        return this.receitaModel.findAll();
    }

    async obterUma(id: number): Promise<Receita> {
        return this.receitaModel.findByPk(id);
    }

    async cadastrar(receita: Receita) {
        this.receitaModel.create(receita);
    }

    async alterar(receita: Receita): Promise<[number, Receita[]]> {
        return this.receitaModel.update(receita, {
            where: {
                id: receita.id
            }
        });
    }

    async apagar(id: number) {
        const receita: Receita = await this.obterUma(id);
        receita.destroy();
    }


}