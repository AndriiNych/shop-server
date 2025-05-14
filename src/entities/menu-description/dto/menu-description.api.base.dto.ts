import { Expose } from 'class-transformer';

export class MenuDescriptionApiBaseDto {
  @Expose()
  id: number;

  @Expose()
  menuId: number;

  @Expose()
  language: string;

  @Expose()
  name: string;
}
