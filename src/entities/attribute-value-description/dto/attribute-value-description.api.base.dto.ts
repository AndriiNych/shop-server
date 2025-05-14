import { Expose } from 'class-transformer';

export class AttributeValueDescriptionApiBaseDto {
  @Expose()
  id: number;

  @Expose()
  attributeValueId: number;

  @Expose()
  language: string;

  @Expose()
  name: string;

  @Expose()
  sortOrder: number;
}
