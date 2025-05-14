import { Expose } from 'class-transformer';

export class CategoryResponseBaseDto {
  @Expose()
  id: number;

  @Expose()
  parentId: number;

  @Expose()
  status: number;

  @Expose()
  createdAt: number;

  @Expose()
  updatedAt: number;

  @Expose()
  inEs: number;

  @Expose()
  inCreatedAt: Date;

  @Expose()
  inUpdatedAt: Date;
}
