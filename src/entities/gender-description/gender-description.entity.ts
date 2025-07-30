import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.gender_description)
export class GenderDescription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'language_id',
  })
  languageId: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'gender_id',
  })
  genderId: number;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
    name: 'description',
  })
  description: string;
}
