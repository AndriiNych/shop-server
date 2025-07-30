import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.gender)
export class Gender {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.LANGUAGE,
    name: 'code',
  })
  code: string;
}
