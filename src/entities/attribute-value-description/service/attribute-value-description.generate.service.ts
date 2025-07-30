import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { LanguageService } from '@src/entities/language/language.service';
import { DataSource, Repository } from 'typeorm';
import { AttributeValueDescription } from '../attribute-value-description.entity';
import { ATTRIBUTE_VALUE, AttributeValueType } from '@src/type/attribute.value';
import { SqlQuery } from '@src/util/sql-builder/sql-query';
import { ColorCodeDescriptionService } from './color-code-description.service';
import { SizeCodeDescriptionService } from './size-code-description.service';

@Injectable()
export class AttributeValueDescriptionGenerate {
  constructor(
    private readonly languageService: LanguageService,
    private readonly colorCodeDescriptionService: ColorCodeDescriptionService,
    private readonly sizeCodeDescriptionService: SizeCodeDescriptionService,
    @InjectRepository(AttributeValueDescription)
    private readonly attributeValueDescriptionRepository: Repository<AttributeValueDescription>,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  public async generateEntriesForNewAttributeValue(): Promise<AttributeValueDescription[]> {
    const language = await this.languageService.getAll();

    const newAttributeValues = await this.getNewRecordsForInsert();

    const newAttributeValueDescription = (
      await Promise.all(
        newAttributeValues.map(async elem => {
          const getAttributeValues =
            this.attributeValues.get(elem.attribute_id) ?? (async () => []);
          return await getAttributeValues(elem);
        }),
      )
    ).flat();

    return newAttributeValueDescription as AttributeValueDescription[];
  }

  public async getRecordByFilter(filter: object): Promise<AttributeValueDescription> {
    return await this.attributeValueDescriptionRepository.findOne({ where: filter });
  }

  private attributeValues = new Map<
    AttributeValueType,
    (elem: any) => Promise<AttributeValueDescription[]>
  >([
    [
      ATTRIBUTE_VALUE.COLOR_CODE,
      elem => this.colorCodeDescriptionService.createColorCodeDescriptionLanguageList(elem),
    ],
    [ATTRIBUTE_VALUE.COLOR_ONE, async () => []],
    [
      ATTRIBUTE_VALUE.SIZE,
      elem => this.sizeCodeDescriptionService.createSizeColorDescriptionLanguageList(elem),
    ],
    [
      ATTRIBUTE_VALUE.SIZE_DRESS,
      elem => this.sizeCodeDescriptionService.createSizeColorDescriptionLanguageList(elem),
    ],
  ]);

  private async getNewRecordsForInsert() {
    const sqlQuery = new SqlQuery();

    const sqlAttributeValue = '(SELECT attribute_value_id FROM attribute_value_description)';

    sqlQuery
      .select([
        'av.id',
        'av.attribute_id',
        'av.color',
        'av.color2',
        'av.image',
        'av.in_id',
        'in_LCode',
      ])
      .from('attribute_value as av')
      .addJoin('LEFT', sqlAttributeValue, 'avd', 'av.id = avd.attribute_value_id')
      .andWhere('avd.attribute_value_id Is Null');

    return await sqlQuery.setDataSource(this.dataSource).getMany();
  }
}
