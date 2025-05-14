import { Expose } from 'class-transformer';

export class MenuPathResponseBaseDto {
  @Expose()
  id: number;

  @Expose()
  menuId: number;

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
