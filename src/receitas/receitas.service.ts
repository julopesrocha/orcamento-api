import { Injectable } from "@nestjs/common";
import { Receita } from "./receitas.module";

@Injectable()
export class ReceitasService {
    receitas: Receita[] = [
       /*
        new Receita("Salário", 2000, new Date),
        new Receita("Renda extra", 500, new Date),
        new Receita("Prêmio", 1000, new Date)
    */
    ];

    obterTodas(): Receita[] {
        return this.receitas;
    }

    obterUma(id: number): Receita {
        return this.receitas[0];
    }

    cadastrar(receita: Receita) {
        this.receitas.push(receita);
    }

    alterar(receita: Receita): Receita {
        return receita;
    }

    apagar(id: number) {
        this.receitas.pop();
    }


}