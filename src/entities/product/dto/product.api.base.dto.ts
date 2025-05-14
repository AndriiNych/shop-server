import { Expose } from 'class-transformer';

export class ProductApiBaseDto {
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
  youtube: string;

  @Expose()
  price: number;

  @Expose()
  quantity: number;

  @Expose()
  stockStatusId: number;

  @Expose()
  status: number;

  @Expose()
  createdAt: number;

  @Expose()
  updatedAt: number;
}
