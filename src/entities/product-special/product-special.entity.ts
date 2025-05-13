import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.product_special)
export class ProductSpecial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.KEY,
    name: 'product_id',
  })
  productId: number;

  @Column({
    ...FIELDS.NUMBER,
    width: 5,
    name: 'priority',
  })
  priority: number;

  @Column({
    ...FIELDS.DECIMAL,
    name: 'price',
  })
  price: number;

  @Column({
    ...FIELDS.DATE,
    name: 'date_start',
  })
  dateStart: Date;

  @Column({
    ...FIELDS.DATE,
    name: 'date_end',
  })
  dateEnd: Date;

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
