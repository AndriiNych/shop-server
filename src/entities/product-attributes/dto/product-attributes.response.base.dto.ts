import { Expose } from 'class-transformer';

export class ProductAttributesResponseBaseDto {
  @Expose()
  id: number;

  @Expose()
  productId: number;

  @Expose()
  attributeId: number;

  @Expose()
  attributeValueId: number;

  @Expose()
  inEs: number;

  @Expose()
  inCreatedAt: Date;

  @Expose()
  inUpdatedAt: Date;
}
