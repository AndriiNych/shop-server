import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.size)
export class Size {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ ...FIELDS.LANGUAGE, name: 'code' })
  code: string;

  @Column({ ...FIELDS.TEXT_SHORT, name: 'nm_short' })
  nmShort: string;

  @Column({ ...FIELDS.TEXT_SHORT, name: 'nm_full' })
  nmFull: string;

  @Column({ ...FIELDS.TEXT_SHORT, name: 'sort' })
  sort: string;

  @Column({ ...FIELDS.BOOLEAN, name: 'is_eldest' })
  isEldest: boolean;

  @Column({ ...FIELDS.TEXT_SHORT, name: 'high' })
  high: string;

  @Column({ ...FIELDS.TEXT_SHORT, name: 'chest' })
  chest: string;
}
