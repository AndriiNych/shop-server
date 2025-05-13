import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.menu_path)
export class MenuPath {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.KEY,
    name: 'menu_id',
  })
  menuId: number;

  @Column({
    ...FIELDS.KEY,
    name: 'path_id',
  })
  pathId: number;

  @Column({
    ...FIELDS.KEY,
    name: 'level',
  })
  level: number;

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
