import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.attribute)
export class Attribute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.SMALINT,
    name: 'product_card',
  })
  productCard: number;

  @Column({
    ...FIELDS.SMALINT,
    name: 'filter',
  })
  filter: number;

  @Column({
    ...FIELDS.SMALINT,
    name: 'filter_hide',
  })
  filterHide: number;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
    name: 'filter_type',
  })
  filterType: string;

  @Column({
    ...FIELDS.KEY,
    name: 'sort_order',
  })
  sortOrder: number;

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
