import { Expose } from 'class-transformer';

export class AttributeValueResponseBaseDto {
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

  @Expose()
  inEs: number;

  @Expose()
  inId: number;

  @Expose()
  inLCode: string;

  @Expose()
  inLCode1: string;

  @Expose()
  inLCode2: string;

  @Expose()
  inLCode3: string;

  @Expose()
  inCreatedAt: Date;

  @Expose()
  inUpdatedAt: Date;
}
