import { Expose } from 'class-transformer';

export class NewItemResponseBaseDto {
  @Expose()
  id: number;

  @Expose()
  newItem: string;
}
