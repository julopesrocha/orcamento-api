import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Despesa } from "./despesas.model";

@Injectable()
export class DespesaService {
    constructor(
        @InjectModel(Despesa)
        private despesaModel: typeof Despesa
    ) {}

    async obterTodas(): Promise<Despesa[]> {
        return this.despesaModel.findAll();
    }

    async obterUma(id: number): Promise<Despesa> {
        return this.despesaModel.findByPk(id);
    }

    async cadastrar(despesa: Despesa) {
        this.despesaModel.create(despesa);
    }

    async alterar(despesa: Despesa): Promise<[number, Despesa[]]> {
        return this.despesaModel.update(despesa, {
            where: {
                id: despesa.id
            }
        });
    }

    async apagar(id: number) {
        const receita: Despesa = await this.obterUma(id);
        receita.destroy();
    }


}