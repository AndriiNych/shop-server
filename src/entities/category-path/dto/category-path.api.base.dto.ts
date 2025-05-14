import { Expose } from 'class-transformer';

export class CategoryPathApiBaseDto {
  @Expose()
  categoryId: number;

  @Expose()
  pathId: number;

  @Expose()
  level: number;
}
