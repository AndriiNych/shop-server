import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.product_description)
export class ProductDescription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.KEY,
    name: 'product_id',
  })
  productId: number;

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
    name: 'h1',
  })
  h1: string;

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
    name: 'description_short',
  })
  descriptionShort: string;

  @Column({
    ...FIELDS.TEXT_MEMO,
    name: 'description',
  })
  description: string;

  @Column({
    ...FIELDS.TEXT_MEMO,
    name: 'composition',
  })
  composition: string;

  @Column({
    ...FIELDS.TEXT_MEMO,
    name: 'care',
  })
  care: string;

  @Column({
    ...FIELDS.TEXT_BIG,
    name: 'search_keyword',
  })
  searchKeyword: string;

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
