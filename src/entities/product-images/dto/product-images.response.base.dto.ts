import { Expose } from 'class-transformer';

export class ProductImagesResponseBaseDto {
  @Expose()
  id: number;

  @Expose()
  productId: number;

  @Expose()
  image: string;

  @Expose()
  sortOrder: number;

  @Expose()
  inEs: number;

  @Expose()
  inCreatedAt: Date;

  @Expose()
  inUpdatedAt: Date;
}
