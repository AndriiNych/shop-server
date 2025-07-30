import { ProductResponseBaseDto } from './product.response.base.dto';
import { Expose } from 'class-transformer';

export class ProductResponseWithDescriptionDto extends ProductResponseBaseDto {
  @Expose()
  productDescription: string;
}
