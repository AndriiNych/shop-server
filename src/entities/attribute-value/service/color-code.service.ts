import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { AttributeValue } from '../attribute-value.entity';
import { ATTRIBUTE_VALUE } from '@src/type/attribute.value';
import { IN_ES_TYPE } from '@src/type/in-es.type';
import { SqlQuery } from '@src/util/sql-builder/sql-query';

interface ColorCodeRecord {
  code: string;
}

@Injectable()
export class ColorCodeService {
  constructor(
    @InjectRepository(AttributeValue)
    private readonly attributeValueRepository: Repository<AttributeValue>,

    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  public async getNewColorCode(): Promise<AttributeValue[]> {
    const newColorList = await this.getNewColorList();

    return await this.mapColorCodesToAttributeValues(newColorList);
  }

  private async mapColorCodesToAttributeValues(
    colorList: ColorCodeRecord[],
  ): Promise<AttributeValue[]> {
    return await Promise.all(colorList.map(({ code }) => this.createColorItem(code)));
  }

  private async createColorItem(code: string): Promise<AttributeValue> {
    const item = new AttributeValue();

    item.attributeId = ATTRIBUTE_VALUE.COLOR_CODE;
    item.image = '';
    item.inEs = IN_ES_TYPE.CREATE;
    item.inLCode = code;

    const colorCode = code.split('');
    if (colorCode.length === 3) {
      item.inLCode1 = colorCode[0];
      item.inLCode2 = colorCode[1];
      item.inLCode3 = colorCode[2];

      const [color0, color1] = await Promise.all(
        colorCode.slice(0, 2).map(code => this.getColorCode(code)),
      );

      item.color = color0;
      item.color2 = color1;
    }

    return item;
  }

  private async getColorCode(code: string): Promise<string> {
    const attribute = await this.attributeValueRepository.findOne({
      where: {
        attributeId: ATTRIBUTE_VALUE.COLOR_ONE,
        inLCode: code,
      },
    });

    if (attribute) {
      return attribute.color;
    }
    return '';
  }

  private async getNewColorList(): Promise<ColorCodeRecord[]> {
    const sqlQuery = new SqlQuery();

    const sqlAttributeValue = `(SELECT attribute_id,  in_LCode FROM sw_attribute_value WHERE attribute_id = :attributeId)`;

    sqlQuery
      .select(['cc.code'])
      .from('sw_color_code as cc')
      .addJoin('LEFT', sqlAttributeValue, 'av', 'cc.code = av.in_LCode')
      .andWhere('av.in_LCode is null')
      .addParameters({
        attributeId: ATTRIBUTE_VALUE.COLOR_CODE,
      });

    return await sqlQuery.setDataSource(this.dataSource).getMany();
  }
}
