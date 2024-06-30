import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('cadastro_produto')
export class CadastroProduto {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'Identificador do produto' })
  id: number;

  @Column()
  @ApiProperty({ description: 'Código do produto' })
  codigo: string;

  @Column()
  @ApiProperty({ description: 'Descrição do produto' })
  descricao: string;

  @Column({ type: 'timestamp' })
  @ApiProperty({ description: 'Data de entrada do produto no estoque' })
  dataEntrada: Date;

  @Column({ type: 'timestamp' })
  @ApiProperty({ description: 'Data de validade do produto' })
  dataValidade: Date;
}