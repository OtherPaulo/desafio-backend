import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadastroUsuarioModule } from './cadastro-usuario/cadastro-usuario.module';
import { CadastroProdutoModule } from './cadastro-produto/cadastro-produto.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://postgres:6c684c209f66d6e0eb60@161.35.130.132:8080/desafio-fullstack',
      autoLoadEntities: true,
      synchronize: true, 
    }),
    CadastroUsuarioModule,
    CadastroProdutoModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
