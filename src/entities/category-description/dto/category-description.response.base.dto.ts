import { Expose } from 'class-transformer';

export class CategoryDescriptionResponseBaseDto {
  @Expose()
  id: number;

  @Expose()
  categoryId: number;

  @Expose()
  language: string;

  @Expose()
  name: string;

  @Expose()
  metaTitle: string;

  @Expose()
  metaDescription: string;

  @Expose()
  metaKeyword: string;

  @Expose()
  description: string;

  @Expose()
  inEs: number;

  @Expose()
  inCreatedAt: Date;

  @Expose()
  inUpdatedAt: Date;
}
