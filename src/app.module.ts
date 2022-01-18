import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceitasController } from './receitas/receitas.controller';
import { ReceitasService } from './receitas/receitas.service';

@Module({
  imports: [],
  controllers: [AppController, ReceitasController],
  providers: [AppService, ReceitasService],
})
export class AppModule {}
