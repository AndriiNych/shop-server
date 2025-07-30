import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.color_first_description)
export class ColorFirstDescription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'language_id',
  })
  language_id: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'color_first_id',
  })
  color_first_id: number;

  @Column({
    ...FIELDS.TEXT_SHORT,
    name: 'description',
  })
  description: string;
}
