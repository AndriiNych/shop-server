import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.category_rules)
export class CategoryRules {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ ...FIELDS.NUMBER, name: 'category_id' })
  categoryId: number;

  @Column({ ...FIELDS.NUMBER, name: 'group_id' })
  groupId: number;

  @Column({ ...FIELDS.NUMBER, name: 'type_id' })
  typeId: number;

  @Column({ ...FIELDS.NUMBER, name: 'gender_id' })
  genderId: number;

  @Column({ ...FIELDS.NUMBER, name: 'fabric_id' })
  fabricId: number;

  @Column({ ...FIELDS.NUMBER, name: 'size_id' })
  sizeId: number;

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
