import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.item_type_description)
export class ItemTypeDescription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'language_id',
  })
  languageId: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'item_type_id',
  })
  itemTypeId: number;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
    name: 'description',
  })
  description: string;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
    name: 'description_full',
  })
  descriptionFull: string;
}
