import { Expose } from 'class-transformer';

export class NewItemApiBaseDto {
  @Expose()
  id: number;

  @Expose()
  newItem: string;
}
