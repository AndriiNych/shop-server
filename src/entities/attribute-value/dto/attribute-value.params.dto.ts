import { IsNumber } from 'class-validator';

export class ArrtibuteValueParamsDto {
  @IsNumber()
  attributeId: number;
}
