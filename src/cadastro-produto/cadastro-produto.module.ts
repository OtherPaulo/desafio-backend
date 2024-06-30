import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CadastroProduto } from './cadastro-produto.entity';
import { CadastroProdutoService } from './cadastro-produto.service';
import { CadastroProdutoController } from './cadastro-produto.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CadastroProduto])],
  providers: [CadastroProdutoService],
  controllers: [CadastroProdutoController],
})
export class CadastroProdutoModule {}