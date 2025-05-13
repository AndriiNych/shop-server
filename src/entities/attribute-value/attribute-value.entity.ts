import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.attribute_value)
export class AttributeValue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.KEY,
    name: 'attribute_id',
  })
  attributeId: number;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
    name: 'color',
  })
  color: string;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
    name: 'color2',
  })
  color2: string;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
    name: 'image',
  })
  image: string;

  @Column({
    ...FIELDS.SMALINT,
    width: 2,
    name: 'in_es',
  })
  inEs: number;

  @Column({
    ...FIELDS.KEY,
    name: 'in_id',
  })
  inId: number;

  @Column({
    ...FIELDS.TEXT_SMALL,
    name: 'in_LCode',
  })
  inLCode: string;

  @Column({
    ...FIELDS.TEXT_SMALL,
    length: 1,
    name: 'in_LCode1',
  })
  inLCode1: string;

  @Column({
    ...FIELDS.TEXT_SMALL,
    length: 1,
    name: 'in_LCode2',
  })
  inLCode2: string;

  @Column({
    ...FIELDS.TEXT_SMALL,
    length: 1,
    name: 'in_LCode3',
  })
  inLCode3: string;

  @Column({
    ...FIELDS.CREATE_AT,
  })
  inCreatedAt: Date;

  @Column({
    ...FIELDS.UPDATED_AT,
  })
  inUpdatedAt: Date;
}
