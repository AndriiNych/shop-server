import { Expose } from 'class-transformer';

export class ProductCategoryInsertNewSiteDto {
  @Expose()
  productId: number;

  @Expose()
  categoryId: number;

  @Expose()
  sortOrder: number;
}
