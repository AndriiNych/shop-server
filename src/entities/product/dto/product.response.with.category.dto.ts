import { Expose } from 'class-transformer';
import { ProductResponseWithDescriptionDto } from './product.response.with.description.dto';

export class ProductResponseWithCategoryDto extends ProductResponseWithDescriptionDto {
  @Expose()
  categoryName: string;
}
