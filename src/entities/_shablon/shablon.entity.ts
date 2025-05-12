import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.shablon)
export class Shablon {
  @PrimaryGeneratedColumn()
  id: number;

  //   @Column({
  //     ...FIELDS.KEY,
  //     name: '',
  //   })
  //   : number;

  //   @Column({
  //     ...FIELDS.NUMBER,
  //   // width: 5,
  //     name: '',
  //   })
  //   : number;

  // @Column({
  //   ...FIELDS.SMALINT,
  // //  width: 1,
  //   name: '',
  // })
  // : number;

  //   @Column({
  //     ...FIELDS.DECIMAL,
  //     name: 'price',
  //   })
  //   price: number;

  // @Column({
  //     ...FIELDS.LANGUAGE,
  //     name: 'language',
  //   })
  //   language: string;

  // @Column({
  //     ...FIELDS.TEXT_,
  //     name: '',
  //   })
  //   : string;

  // @Column({
  //     ...FIELDS.KEY,
  //     name: 'created_at'
  //   })
  //   createdAt: number;

  //   @Column({
  //     ...FIELDS.KEY,
  //     name: 'updated_at'
  //   })
  //   updatedAt: number;

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
