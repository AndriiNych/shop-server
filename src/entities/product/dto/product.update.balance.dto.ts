import { PickType } from '@nestjs/swagger';
import { ProductResponseBaseDto } from './product.response.base.dto';

export class ProductUpdateBalance extends PickType(ProductResponseBaseDto, [
  'id',
  'modelMainProduct',
  'stockStatusId',
  'status',
] as const) {}
