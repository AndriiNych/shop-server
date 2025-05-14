import { Expose } from 'class-transformer';

export class ProductSpecialResponseBaseDto {
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

  @Expose()
  inEs: number;

  @Expose()
  inCreatedAt: Date;

  @Expose()
  inUpdatedAt: Date;
}
