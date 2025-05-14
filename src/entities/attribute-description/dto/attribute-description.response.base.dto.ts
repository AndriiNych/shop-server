import { Expose } from 'class-transformer';

export class AttributeDescriptionResponseBaseDto {
  @Expose()
  id: number;

  @Expose()
  attributeId: number;

  @Expose()
  language: string;

  @Expose()
  name: string;

  @Expose()
  inEs: number;

  @Expose()
  inCreatedAt: Date;

  @Expose()
  inUpdatedAt: Date;
}
