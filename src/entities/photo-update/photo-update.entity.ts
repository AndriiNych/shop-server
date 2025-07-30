import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.photo_update)
export class PhotoUpdate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'product_id',
  })
  productId: number;

  @Column({
    ...FIELDS.TEXT_SHORT,
    name: 'vendor_code',
  })
  vendorCode: string;

  @Column({
    ...FIELDS.BOOLEAN,
    name: 'is_mail',
  })
  isMail: boolean;

  @Column({
    ...FIELDS.NUMBER,
    name: 'sort_order',
  })
  sortOrder: number;

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
