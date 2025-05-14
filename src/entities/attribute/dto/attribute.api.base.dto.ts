import { Expose } from 'class-transformer';

export class AttributeApiBaseDto {
  @Expose()
  id: number;

  @Expose()
  productCard: number;

  @Expose()
  filter: number;

  @Expose()
  filterHide: number;

  @Expose()
  filterType: string;

  @Expose()
  sortOrder: number;
}
