import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.attribute_description)
export class AttributeDescription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.KEY,
    name: 'attribute_id',
  })
  attributeId: number;

  @Column({
    ...FIELDS.LANGUAGE,
    name: 'language',
  })
  language: string;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
    name: 'name',
  })
  name: string;

  @Column({
    ...FIELDS.SMALINT,
    width: 2,
    name: 'in_es',
  })
  inEs: number;

  @Column({
    ...FIELDS.CREATE_AT,
  })
  inCreatedAt: Date;

  @Column({
    ...FIELDS.UPDATED_AT,
  })
  inUpdatedAt: Date;
}
