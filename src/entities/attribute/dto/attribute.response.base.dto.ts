import { Expose } from 'class-transformer';

export class AttributeResponseBaseDto {
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

  @Expose()
  inEs: number;

  @Expose()
  inCreatedAt: Date;

  @Expose()
  inUpdatedAt: Date;
}
