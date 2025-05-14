import { Expose } from 'class-transformer';

export class MenuPathApiBaseDto {
  @Expose()
  menuId: number;

  @Expose()
  pathId: number;

  @Expose()
  level: number;
}
