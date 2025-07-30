import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CategoryDescription } from '../category-description/category-description.entity';

@Entity(TABLE_NAMES.category)
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.KEY,
    name: 'parent_id',
  })
  parentId: number;

  @Column({
    ...FIELDS.SMALINT,
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

  @OneToMany(() => CategoryDescription, descriptions => descriptions.category)
  descriptions: CategoryDescription[];
}
