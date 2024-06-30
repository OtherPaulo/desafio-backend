import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CadastroUsuarioService } from './cadastro-usuario.service';
import { CadastroUsuario } from './cadastro-usuario.entity';

@ApiTags('usuarios')
@Controller('usuarios')
export class CadastroUsuarioController {
  constructor(private readonly cadastroUsuarioService: CadastroUsuarioService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo usuário' })
  @ApiResponse({ status: 200, description: 'Usuário criado com sucesso!' })
  @ApiResponse({ status: 400, description: 'Dados inválidos fornecidos' })
  @ApiResponse({ status: 500, description: 'Erro interno no servidor' })
  create(@Body() usuario: CadastroUsuario): Promise<CadastroUsuario> {
    return this.cadastroUsuarioService.create(usuario);
  }
}
