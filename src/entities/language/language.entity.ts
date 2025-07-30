import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Column, Entity, PrimaryGeneratedColumn, TableExclusion } from 'typeorm';

@Entity(TABLE_NAMES.language)
export class Language {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.LANGUAGE,
    name: 'language',
  })
  language: string;
}
