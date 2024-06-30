import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CadastroProduto } from './cadastro-produto.entity';
import { CadastroProdutoDto } from './cadastro-produto.dto';

@Injectable()
export class CadastroProdutoService {
  constructor(
    @InjectRepository(CadastroProduto)
    private cadastroProdutoRepository: Repository<CadastroProduto>,
  ) {}

  async create(createProdutoDto: CadastroProdutoDto): Promise<CadastroProduto> {
    const produto = this.cadastroProdutoRepository.create(createProdutoDto);
    return this.cadastroProdutoRepository.save(produto);
  }
  
  async findAll(): Promise<CadastroProduto[]> {
    return this.cadastroProdutoRepository.find();
  }
}
