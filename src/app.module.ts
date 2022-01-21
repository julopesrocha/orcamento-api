import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DespesasController } from './despesas/despesas.controller';
import { Despesa } from './despesas/despesas.model';
import { DespesaService } from './despesas/despesas.service';
import { ReceitasController } from './receitas/receitas.controller';
import { Receita } from './receitas/receitas.module';
import { ReceitasService } from './receitas/receitas.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect:'mysql',
      host: 'localhost',
      port: 3306,
      username:process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
      database: 'orcamento',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Receita, Despesa])    
  ],
  controllers: [AppController, ReceitasController, DespesasController],
  providers: [AppService, ReceitasService, DespesaService],
})
export class AppModule {}
