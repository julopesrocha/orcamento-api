import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Receita } from "./receitas.module";
import { ReceitasService } from "./receitas.service";

@Controller('receitas')
export class ReceitasController {
    constructor(private receitasService: ReceitasService){

    }

    @Get()
    async obterTodas(): Promise<Receita[]> {
        return this.receitasService.obterTodas();
    }

    @Get(':id')
    async obterUma(@Param() params): Promise<Receita> {
        return this.receitasService.obterUma(params.id)
    }

    @Post()
    async cadastrar(@Body() receita: Receita) {
        this.receitasService.cadastrar(receita)
    }
        
    @Put(':id')
    async alterar(@Body() receita: Receita) : Promise<[number, Receita[]]> {
        return this.receitasService.alterar(receita)
    }

    @Delete(':id')
    async apagar(@Param() params) {
        this.receitasService.apagar(params.id);
    }
}