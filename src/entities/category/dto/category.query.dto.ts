import { IsNumber } from 'class-validator';

export class CategoryQueryDto {
  @IsNumber()
  _end?: number;

  @IsNumber()
  _start?: number;
}
