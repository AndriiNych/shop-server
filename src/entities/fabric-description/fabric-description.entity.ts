import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.fabric_description)
export class FabricDescription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'language_id',
  })
  languageId: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'fabric_id',
  })
  fabricId: number;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
    name: 'description',
  })
  description: string;
}
