import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.group_item)
export class GroupItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'group_id',
  })
  groupId: number;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
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
}
