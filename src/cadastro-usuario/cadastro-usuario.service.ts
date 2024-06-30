import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CadastroUsuario } from './cadastro-usuario.entity';

@Injectable()
export class CadastroUsuarioService {
  constructor(
    @InjectRepository(CadastroUsuario)
    private cadastroUsuarioRepository: Repository<CadastroUsuario>,
  ) {}

  async findByEmail(email: string): Promise<CadastroUsuario | undefined> {
    return this.cadastroUsuarioRepository.findOne({
      where: { email }
    });
  }

  async create(usuario: CadastroUsuario): Promise<CadastroUsuario> {
    const userExists = await this.findByEmail(usuario.email);
    if (userExists) {
      throw new HttpException('Email já cadastrado.', HttpStatus.BAD_REQUEST);
    }

    return this.cadastroUsuarioRepository.save(usuario);
  }
}
