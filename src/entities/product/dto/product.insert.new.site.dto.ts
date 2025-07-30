import { Expose } from 'class-transformer';

export class ProductInsertNewSiteDto {
  @Expose()
  id: number;

  @Expose()
  model: string;

  @Expose()
  modelUnited: string;

  @Expose()
  modelUnitedAttribute: string;

  @Expose()
  modelMainProduct: number;

  @Expose()
  mainCategoryId: number;

  @Expose()
  image: string;

  @Expose()
  price: number;

  @Expose()
  quantity: number;

  @Expose()
  stockStatusId: number;

  @Expose()
  status: number;
}
