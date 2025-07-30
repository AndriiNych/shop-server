import { Expose } from 'class-transformer';

export class ProductAttributesInsertNewSiteDto {
  @Expose()
  productId: number;

  @Expose()
  attributeId: number;

  @Expose()
  attributeValueId: number;
}
