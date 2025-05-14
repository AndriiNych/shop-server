import { Expose } from 'class-transformer';

export class CategoryDescriptionApiBaseDto {
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
}
