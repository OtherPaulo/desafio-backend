import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class CadastroUsuario {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'Identificador do usuário' })
  id: number;

  @Column()
  @ApiProperty({ description: 'Nome completo do usuário' })
  nome: string;  

  @Column({ unique: true })
  @ApiProperty({ description: 'Email do usuário', uniqueItems: true })
  email: string;  
  @Column()
  @ApiProperty({ description: 'Senha do usuário' })
  senha: string;  
}