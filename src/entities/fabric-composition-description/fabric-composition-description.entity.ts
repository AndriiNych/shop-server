import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.fabric_composition_description)
export class FabricCompositionDescription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'language_id',
  })
  languageId: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'fabric_composition_id',
  })
  fabricCompositionId: number;

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
