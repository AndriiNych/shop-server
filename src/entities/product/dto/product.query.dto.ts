import { IsIn, IsNumber, IsOptional, IsString } from 'class-validator';

export class ProductQueryDto {
  @IsNumber()
  @IsOptional()
  _end?: number;

  @IsNumber()
  @IsOptional()
  _start?: number;

  @IsIn(['asc', 'desc'])
  @IsOptional()
  _order?: string;

  @IsString()
  @IsOptional()
  _sort?: string;
}
