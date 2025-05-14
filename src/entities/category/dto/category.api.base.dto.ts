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
}
