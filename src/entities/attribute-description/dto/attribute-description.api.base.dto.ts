import { Expose } from 'class-transformer';

export class AttributeDescriptionApiBaseDto {
  @Expose()
  id: number;

  @Expose()
  attributeId: number;

  @Expose()
  language: string;

  @Expose()
  name: string;
}
