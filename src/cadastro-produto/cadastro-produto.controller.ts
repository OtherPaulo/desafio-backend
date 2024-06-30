import { Controller, Post, Get, Body, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CadastroProdutoService } from './cadastro-produto.service';
import { CadastroProdutoDto } from './cadastro-produto.dto';
import { CadastroProduto } from './cadastro-produto.entity';

@ApiTags('cadastro-produto')
@Controller('cadastro-produto')
export class CadastroProdutoController {
  constructor(private readonly cadastroProdutoService: CadastroProdutoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo produto' })
  @ApiResponse({ status: 201, description: 'Produto criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro ao criar produto.' })
  @ApiResponse({ status: 500, description: 'Erro interno no servidor' })
  async create(@Body() createProdutoDto: CadastroProdutoDto): Promise<CadastroProduto> {
    try {
      return await this.cadastroProdutoService.create(createProdutoDto);
    } catch (error) {
      throw new HttpException('Erro ao cadastrar produto', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os produtos' })
  @ApiResponse({ status: 200, description: 'Lista de produtos.' })
  @ApiResponse({ status: 500, description: 'Erro interno no servidor' })
  async findAll(): Promise<CadastroProduto[]> {
    try {
      return await this.cadastroProdutoService.findAll();
    } catch (error) {
      throw new HttpException('Erro ao buscar produtos', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
