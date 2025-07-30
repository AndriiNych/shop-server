import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Category } from '../category/category.entity';
import { Product } from '../product/product.entity';

@Entity(TABLE_NAMES.category_description)
export class CategoryDescription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.KEY,
    name: 'category_id',
  })
  categoryId: number;

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
    ...FIELDS.TEXT_DEFAULT,
    name: 'meta_title',
  })
  metaTitle: string;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
    name: 'meta_description',
  })
  metaDescription: string;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
    name: 'meta_keyword',
  })
  metaKeyword: string;

  @Column({
    ...FIELDS.TEXT_MEMO,
    name: 'description',
  })
  description: string;

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

  @ManyToOne(() => Category, category => category.descriptions)
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
