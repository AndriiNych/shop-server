import { Expose } from 'class-transformer';

export class ProductDescriptionResponseBaseDto {
  @Expose()
  id: number;

  @Expose()
  productId: number;

  @Expose()
  language: string;

  @Expose()
  name: string;

  @Expose()
  h1: string;

  @Expose()
  metaTitle: string;

  @Expose()
  metaDescription: string;

  @Expose()
  metaKeyword: string;

  @Expose()
  descriptionShort: string;

  @Expose()
  description: string;

  @Expose()
  composition: string;

  @Expose()
  care: string;

  @Expose()
  searchKeyword: string;

  @Expose()
  inEs: number;

  @Expose()
  inCreatedAt: Date;

  @Expose()
  inUpdatedAt: Date;
}
