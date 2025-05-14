import { Expose } from 'class-transformer';

export class ProductStickersResponseBaseDto {
  @Expose()
  id: number;

  @Expose()
  productId: number;

  @Expose()
  stickerId: number;
}
