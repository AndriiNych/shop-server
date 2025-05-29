import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.user)
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
    name: 'email',
  })
  email: string;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
    name: 'password',
  })
  password: string;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
    name: 'name',
  })
  name: string;

  @Column({
    ...FIELDS.TEXT_DEFAULT,
    name: 'role',
  })
  role: string[];
}
