import { Expose } from 'class-transformer';

export class AttributeValueDescriptionResponseBaseDto {
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

  @Expose()
  inEs: number;

  @Expose()
  inCreatedAt: Date;

  @Expose()
  inUpdatedAt: Date;
}
