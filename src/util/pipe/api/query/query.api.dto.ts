import { Expose } from 'class-transformer';
import { IsIn, IsNumber, IsOptional, IsString } from 'class-validator';

export class QueryApiDto {
  @Expose()
  @IsNumber()
  @IsOptional()
  _end?: number;

  @Expose()
  @IsNumber()
  @IsOptional()
  _start?: number;

  @Expose()
  @IsIn(['asc', 'desc'])
  @IsOptional()
  _order?: string;

  @Expose()
  @IsString()
  @IsOptional()
  _sort?: string;

  @Expose()
  @IsOptional()
  filters?: Record<string, string>;
}
