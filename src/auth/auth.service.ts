import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CadastroUsuarioService } from '../cadastro-usuario/cadastro-usuario.service';
import { CadastroUsuario } from '../cadastro-usuario/cadastro-usuario.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly cadastroUsuarioService: CadastroUsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, senha: string): Promise<any> {
    const usuario = await this.cadastroUsuarioService.findByEmail(email);
    if (usuario && usuario.senha === senha) {
      const { senha, ...result } = usuario;
      return result;
    }
    return null;
  }

  async register(usuario: CadastroUsuario) {
    const payload = { email: usuario.email, sub: usuario.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
