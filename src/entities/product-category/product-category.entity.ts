import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.product_category)
export class ProductCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.KEY,
    name: 'product_id',
  })
  productId: number;

  @Column({
    ...FIELDS.KEY,
    name: 'category_id',
  })
  categoryId: number;

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
