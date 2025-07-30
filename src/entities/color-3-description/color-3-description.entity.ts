import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.color_3_description)
export class Color3Description {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'language_id',
  })
  language_id: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'color_3_id',
  })
  color_3_id: number;

  @Column({
    ...FIELDS.TEXT_SHORT,
    name: 'description',
  })
  description: string;
}
