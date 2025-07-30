import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.item_type)
export class ItemType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'parent_id',
  })
  parentId: number;

  @Column({
    ...FIELDS.LANGUAGE,
    name: 'code',
  })
  code: string;

  @Column({
    ...FIELDS.NUMBER,
    name: 'sort',
  })
  sort: number;
}
