import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.task)
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.TEXT_BIG,
    name: 'name',
  })
  name: string;

  @Column({
    ...FIELDS.TEXT_SHORT,
    name: 'description',
  })
  description: string;

  @Column({
    ...FIELDS.BOOLEAN,
    name: 'isComplete',
  })
  isComplete: boolean;

  @Column({
    ...FIELDS.CREATE_AT,
  })
  inCreatedAt: Date;

  @Column({
    ...FIELDS.UPDATED_AT,
  })
  inUpdatedAt: Date;
}
