import { Expose } from 'class-transformer';

export class MenuApiBaseDto {
  @Expose()
  id: number;

  @Expose()
  type: number;

  @Expose()
  parentId: number;

  @Expose()
  urlType: number;

  @Expose()
  urlValue: string;

  @Expose()
  urlValueId: number;

  @Expose()
  image: string;

  @Expose()
  main: number;

  @Expose()
  color: string;

  @Expose()
  sortOrder: number;

  @Expose()
  status: number;
}
