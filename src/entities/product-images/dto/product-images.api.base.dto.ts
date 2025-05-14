import { Expose } from 'class-transformer';

export class ProductImagesApiBaseDto {
  @Expose()
  id: number;

  @Expose()
  productId: number;

  @Expose()
  image: string;

  @Expose()
  sortOrder: number;
}
