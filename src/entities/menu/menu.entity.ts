import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.menu)
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.SMALINT,
    name: 'type',
  })
  type: number;

  @Column({
    ...FIELDS.KEY,
    name: 'parent_id',
  })
  parentId: number;

  @Column({
    ...FIELDS.SMALINT,
    name: 'url_type',
  })
  urlType: number;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
    name: 'url_value',
  })
  urlValue: string;

  @Column({
    ...FIELDS.KEY,
    name: 'url_value_id',
  })
  urlValueId: number;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
    name: 'image',
  })
  image: string;

  @Column({
    ...FIELDS.SMALINT,
    name: 'main',
  })
  main: number;

  @Column({
    ...FIELDS.TEXT_SHORT,
    name: 'color',
  })
  color: string;

  @Column({
    ...FIELDS.KEY,
    name: 'sort_order',
  })
  sortOrder: number;

  @Column({
    ...FIELDS.SMALINT,
    default: 1,
    name: 'status',
  })
  status: number;

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
