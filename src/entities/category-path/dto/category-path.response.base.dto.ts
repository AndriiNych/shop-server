import { Expose } from 'class-transformer';

export class CategoryPathResponseBaseDto {
  @Expose()
  id: number;

  @Expose()
  categoryId: number;

  @Expose()
  pathId: number;

  @Expose()
  level: number;

  @Expose()
  inEs: number;

  @Expose()
  inCreatedAt: Date;

  @Expose()
  inUpdatedAt: Date;
}
