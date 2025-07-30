import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { ATTRIBUTE_VALUE } from '@src/type/attribute.value';
import { SqlQuery } from '@src/util/sql-builder/sql-query';
import { DataSource } from 'typeorm';
import { AttributeValue } from '../attribute-value.entity';
import { IN_ES_TYPE } from '@src/type/in-es.type';

interface SizeRecord {
  code: string;
}

@Injectable()
export class SizeCodeService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  public async getNewSizeCode(): Promise<AttributeValue[]> {
    const newSizeList = await this.getNewSizeList();
    return this.mapSizesToAttributeValues(newSizeList);
  }

  private mapSizesToAttributeValues(colorList: SizeRecord[]): AttributeValue[] {
    return colorList.map(code => this.createSizeItem(code)).flat();
  }

  private createSizeItem({ code }: SizeRecord): AttributeValue[] {
    return [ATTRIBUTE_VALUE.SIZE, ATTRIBUTE_VALUE.SIZE_DRESS].map(attributeId => {
      const newItem = new AttributeValue();

      newItem.attributeId = attributeId;
      newItem.image = '';
      newItem.inEs = IN_ES_TYPE.CREATE;
      newItem.inLCode = code;

      newItem.inLCode1 = '';
      newItem.inLCode2 = '';
      newItem.inLCode3 = '';

      newItem.color = '';
      newItem.color2 = '';

      return newItem;
    });
  }

  private async getNewSizeList(): Promise<SizeRecord[]> {
    const sqlQuery = new SqlQuery();

    const sqlAttributeValue = `(SELECT attribute_id,  in_LCode FROM sw_attribute_value WHERE attribute_id = :attributeId)`;

    sqlQuery
      .select(['sz.code'])
      .from('sw_size as sz')
      .addJoin('LEFT', sqlAttributeValue, 'av', 'sz.code = av.in_LCode')
      .andWhere('av.in_LCode is null')
      .addParameters({
        attributeId: ATTRIBUTE_VALUE.SIZE,
      });

    return await sqlQuery.setDataSource(this.dataSource).getMany();
  }
}
