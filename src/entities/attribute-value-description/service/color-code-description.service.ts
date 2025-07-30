import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { LanguageService } from '@src/entities/language/language.service';
import { IN_ES_TYPE } from '@src/type/in-es.type';
import { SqlQuery } from '@src/util/sql-builder/sql-query';
import { DataSource } from 'typeorm';
import { AttributeValueDescription } from '../attribute-value-description.entity';

@Injectable()
export class ColorCodeDescriptionService {
  constructor(
    private readonly languageService: LanguageService,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  public async createColorCodeDescriptionLanguageList(elem): Promise<AttributeValueDescription[]> {
    const language = await this.languageService.getAll();

    const colorCodeDescriptionLanguageList = await Promise.all(
      language.map(async ({ language: langName, id }) => {
        const newItem = new AttributeValueDescription();

        newItem.language = langName;
        newItem.attributeValueId = elem.id;
        newItem.name = await this.createColorCodeDescription({
          code: elem.in_LCode,
          languageId: id,
        });
        newItem.sortOrder = 0;
        newItem.inEs = IN_ES_TYPE.CREATE;
        return newItem;
      }),
    );

    return colorCodeDescriptionLanguageList;
  }

  private async createColorCodeDescription(filter: {
    code: string;
    languageId: number;
  }): Promise<string> {
    const { code, languageId } = filter;

    const colorCodeList = code.split('');

    const colorNameList = await Promise.all(
      colorCodeList.map(async (colorChar, idx) => {
        const getName =
          idx < 2 ? this.getColorFirstNameByCode.bind(this) : this.getColor3NameByCode.bind(this);
        const resultName = await getName({
          languageId,
          code: colorChar,
        });
        return resultName?.name;
      }),
    );
    return colorNameList.join(', ');
  }

  private async getColor3NameByCode(filter: { code: string; languageId: number }): Promise<any> {
    const { code, languageId } = filter;

    const sqlQuery = new SqlQuery();

    const sqlColor3Description =
      '(SELECT description as name, color_3_id FROM color_3_description WHERE language_id = :languageId )';

    sqlQuery
      .select(['c3d.name'])
      .from('(SELECT id, code FROM color_3 WHERE code = :code) as c3')
      .addJoin('LEFT', sqlColor3Description, 'c3d', 'c3.id = c3d.color_3_id')
      .addParameters(filter);

    const result = await sqlQuery.setDataSource(this.dataSource).getMany();

    return result[0];
  }

  private async getColorFirstNameByCode(filter: {
    code: string;
    languageId: number;
  }): Promise<any> {
    const { code, languageId } = filter;

    const sqlQuery = new SqlQuery();

    const sqlColorFirstDescription =
      '(SELECT description as name, color_first_id FROM color_first_description WHERE language_id = :languageId )';

    sqlQuery
      .select(['cfd.name'])
      .from('(SELECT id, code FROM color_first WHERE code = :code) as cf')
      .addJoin('LEFT', sqlColorFirstDescription, 'cfd', 'cf.id = cfd.color_first_id')
      .addParameters(filter);

    const result = await sqlQuery.setDataSource(this.dataSource).getMany();

    return result[0];
  }
}
