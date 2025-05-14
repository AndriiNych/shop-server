import { Expose } from 'class-transformer';

export class ProductAttributesApiBaseDto {
  @Expose()
  id: number;

  @Expose()
  productId: number;

  @Expose()
  attributeId: number;

  @Expose()
  attributeValueId: number;
}
