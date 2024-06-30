import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CadastroUsuario } from './cadastro-usuario.entity';
import { CadastroUsuarioService } from './cadastro-usuario.service';
import { CadastroUsuarioController } from './cadastro-usuario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CadastroUsuario])],
  providers: [CadastroUsuarioService],
  controllers: [CadastroUsuarioController],
  exports: [CadastroUsuarioService],  
})
export class CadastroUsuarioModule {}  
