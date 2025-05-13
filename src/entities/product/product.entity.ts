import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.product)
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
    name: 'model',
  })
  model: string;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
    name: 'model_united',
  })
  modelUnited: string;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
    name: 'model_united_attribute',
  })
  modelUnitedAttribute: string;

  @Column({
    ...FIELDS.SMALINT,
    name: 'model_main_product',
  })
  modelMainProduct: number;

  @Column({
    ...FIELDS.KEY,
    name: 'main_category_id',
  })
  mainCategoryId: number;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
    default: 'blank_logo.jpg',
    name: 'image',
  })
  image: string;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
    name: 'youtube',
  })
  youtube: string;

  @Column({
    ...FIELDS.DECIMAL,
    name: 'price',
  })
  price: number;

  @Column({
    ...FIELDS.NUMBER,
    width: 4,
    name: 'quantity',
  })
  quantity: number;

  @Column({
    ...FIELDS.KEY,
    name: 'stock_status_id',
  })
  stockStatusId: number;

  @Column({
    ...FIELDS.SMALINT,
    default: 1,
    name: 'status',
  })
  status: number;

  @Column({
    ...FIELDS.KEY,
    name: 'created_at',
  })
  createdAt: number;

  @Column({
    ...FIELDS.KEY,
    name: 'updated_at',
  })
  updatedAt: number;

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
