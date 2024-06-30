import { IsString, IsNotEmpty, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CadastroProdutoDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Código do produto' })
  codigo: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Descrição do produto' })
  descricao: string;

  @IsDateString()
  @ApiProperty({ description: 'Data de entrada do produto no estoque' })
  dataEntrada: Date;

  @IsDateString()
  @ApiProperty({ description: 'Data de validade do produto' })
  dataValidade: Date;
}