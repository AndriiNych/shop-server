import { Expose } from 'class-transformer';

export class AttributeValueApiBaseDto {
  @Expose()
  id: number;

  @Expose()
  attributeId: number;

  @Expose()
  color: string;

  @Expose()
  color2: string;

  @Expose()
  image: string;
}
