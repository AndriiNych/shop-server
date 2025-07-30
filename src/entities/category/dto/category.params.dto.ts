import { IsNumber } from 'class-validator';
export class CategoryParamsDto {
  @IsNumber()
  id: number;
}
