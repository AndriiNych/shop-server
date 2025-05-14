import { Expose } from 'class-transformer';

export class ProductSpecialApiBaseDto {
  @Expose()
  id: number;

  @Expose()
  productId: number;

  @Expose()
  priority: number;

  @Expose()
  price: number;

  @Expose()
  dateStart: Date;

  @Expose()
  dateEnd: Date;
}
