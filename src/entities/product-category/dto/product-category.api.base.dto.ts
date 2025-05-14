import { Expose } from 'class-transformer';

export class ProductCategoryApiBaseDto {
  @Expose()
  id: number;

  @Expose()
  productId: number;

  @Expose()
  categoryId: number;

  @Expose()
  sortOrder: number;
}
