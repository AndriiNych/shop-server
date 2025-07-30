import { Expose } from 'class-transformer';

export class ProductStickersInsertNewSiteDto {
  @Expose()
  productId: number;

  @Expose()
  stickerId: number;
}
