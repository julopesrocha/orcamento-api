import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Despesa } from "./despesas.model";
import { DespesaService } from "./despesas.service";

@Controller('despesas')
export class DespesasController {
    constructor(private despesasService: DespesaService){

    }

    @Get()
    async obterTodas(): Promise<Despesa[]> {
        return this.despesasService.obterTodas();
    }

    @Get(':id')
    async obterUma(@Param() params): Promise<Despesa> {
        return this.despesasService.obterUma(params.id)
    }

    @Post()
    async cadastrar(@Body() despesa: Despesa) {
        //verificação | A API não deve permitir o cadastro de depesas duplicadas
        this.despesasService.cadastrar(despesa)
    }
        
    @Put(':id')
    async alterar(@Body() despesa: Despesa) : Promise<[number, Despesa[]]> {
        return this.despesasService.alterar(despesa)
    }

    @Delete(':id')
    async apagar(@Param() params) {
        this.despesasService.apagar(params.id);
    }
}