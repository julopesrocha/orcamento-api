import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Receita } from "./receitas.module";
import { ReceitasService } from "./receitas.service";

@Controller('receitas')
export class ReceitasController {
    constructor(private receitasService: ReceitasService){

    }

    @Get()
    obterTodas(): Receita[] {
        return this.receitasService.obterTodas();
    }

    @Get(':id')
    obterUma(@Param() params): Receita {
        return this.receitasService.obterUma(params.id)
    }

    @Post()
    cadastrar(@Body() receita: Receita) {
        receita.id = 300;
        this.receitasService.cadastrar(receita);
    }

    @Put()
    alterar(@Body() receita: Receita): Receita {
        return this.receitasService.alterar(receita);
    }

    @Delete(':id')
    apagar(@Param() params) {
        this.receitasService.apagar(params.id);
    }
}