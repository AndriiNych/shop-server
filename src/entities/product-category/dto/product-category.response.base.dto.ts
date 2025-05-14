import { Expose } from 'class-transformer';

export class ProductCategoryResponseBaseDto {
  @Expose()
  id: number;

  @Expose()
  productId: number;

  @Expose()
  categoryId: number;

  @Expose()
  sortOrder: number;

  @Expose()
  inEs: number;

  @Expose()
  inCreatedAt: Date;

  @Expose()
  inUpdatedAt: Date;
}
