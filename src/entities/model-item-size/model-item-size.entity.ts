import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.model_item_size)
export class ModelItemSize {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'item_id',
  })
  itemId: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'group_id',
  })
  groupId: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'item_type_id',
  })
  itemTypeId: number;

  @Column({
    ...FIELDS.LANGUAGE,
    name: 'model_number',
  })
  model_number: string;

  @Column({
    ...FIELDS.NUMBER,
    name: 'add_charact_id',
  })
  addCharactId: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'sex_id',
  })
  sexId: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'fabric_id',
  })
  fabricId: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'fabric_composition_id',
  })
  fabricCompositionId: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'size_id',
  })
  sizeId: number;

  @Column({
    ...FIELDS.TEXT_SHORT,
    name: 'vendor_code',
  })
  vendorCode: string;

  @Column({
    ...FIELDS.DECIMAL,
    name: 'price',
  })
  price: number;

  @Column({
    ...FIELDS.NUMBER,
    name: 'status',
  })
  status: number;
}
