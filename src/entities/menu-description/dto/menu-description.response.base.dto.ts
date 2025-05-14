import { Expose } from 'class-transformer';

export class MenuDescriptionResponseBaseDto {
  @Expose()
  id: number;

  @Expose()
  menuId: number;

  @Expose()
  language: string;

  @Expose()
  name: string;

  @Expose()
  inEs: number;

  @Expose()
  inCreatedAt: Date;

  @Expose()
  inUpdatedAt: Date;
}
