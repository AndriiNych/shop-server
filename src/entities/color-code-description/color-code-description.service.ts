import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { ColorCodeDescription } from './color-code-description.entity';
import { DataSource, Repository } from 'typeorm';
import { ColorFirstDescription } from '../color-first-description/color-first-description.entity';
import { SqlQuery } from '@src/util/sql-builder/sql-query';
import { Color3Description } from '../color-3-description/color-3-description.entity';
import { ColorCodeType } from '../color-code/color-code.service';

@Injectable()
export class ColorCodeDescriptionService {
  constructor(
    @InjectRepository(ColorCodeDescription)
    private readonly colorCodeDescriptionRepository: Repository<ColorCodeDescription>,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  public async getColorCodeDescription(
    code: string,
    languageId: number,
  ): Promise<ColorCodeDescription[]> {
    const sqlQuery = new SqlQuery();

    const sqlColorCodeDescription =
      '(SELECT * FROM sw_color_code_description WHERE language_id = :langId)';

    sqlQuery
      .select([
        'ccd.id as id',
        'ccd.color_code_id as color_code_id',
        'ccd.language_id as language_id',
        'ccd.description as description',
      ])
      .from('(SELECT * FROM sw_color_code WHERE code = :lCode) cc')
      .addJoin('INNER', sqlColorCodeDescription, 'ccd', 'ccd.color_code_id = cc.id')
      .addParameters({
        lCode: code,
        langId: languageId,
      });

    return await sqlQuery.setDataSource(this.dataSource).getMany();
  }

  public async saveColorCodeDescriptionByColorCode(
    conditions: ColorCodeType,
  ): Promise<ColorCodeDescription[]> {
    const codeColorDescriptionList = await this.getColorCodeDescriptionList(conditions);
    return this.colorCodeDescriptionRepository.save(codeColorDescriptionList);
  }

  private async getColorCodeDescriptionList(
    conditions: ColorCodeType,
  ): Promise<ColorCodeDescription[]> {
    const colorList = await this.getColorDescriptionList(conditions);

    const colorCodeDescriptionList = colorList[0].map(item => {
      const color2Description =
        colorList?.[1]?.find(color2 => color2.language_id === item.language_id)?.description ?? '';

      const color3Description =
        colorList?.[2]?.find(color3 => color3.language_id === item.language_id)?.description ?? '';

      const description = [item.description, color2Description, color3Description].join(', ');

      const result = new ColorCodeDescription();
      result.language_id = item.language_id;
      result.color_code_id = conditions.id;
      result.description = description;

      return result;
    });

    return colorCodeDescriptionList;
  }

  private async getColorDescriptionList(conditions: ColorCodeType) {
    const color = conditions.code.split('');

    return await Promise.all([
      this.getColorFirstDescription(color[0]),
      this.getColorFirstDescription(color[1]),
      this.getColorThirdDescription(color[2]),
    ]);
  }

  private async getColorThirdDescription(code: string): Promise<Color3Description[]> {
    const sqlQuery = new SqlQuery();

    const sqlColor3Description = '(SELECT * FROM sw_color_3_description)';

    sqlQuery
      .select([
        'c3d.id as id',
        'c3d.language_id as language_id',
        'c3d.color_3_id as color_3_id',
        'c3d.description as description',
      ])
      .from('(SELECT * FROM sw_color_3 WHERE code = :lCode) c3')
      .addJoin('INNER', sqlColor3Description, 'c3d', 'c3d.color_3_id = c3.id')
      .addParameters({
        lCode: code,
      });

    return await sqlQuery.setDataSource(this.dataSource).getMany();
  }

  private async getColorFirstDescription(code: string): Promise<ColorFirstDescription[]> {
    const sqlQuery = new SqlQuery();

    const sqlColorFirstDescription = '(SELECT * FROM sw_color_first_description)';

    sqlQuery
      .select([
        'cfd.id as id',
        'cfd.language_id as language_id',
        'cfd.color_first_id as color_first_id',
        'cfd.description as description',
      ])
      .from('(SELECT * FROM sw_color_first WHERE code = :lCode) cf')
      .addJoin('INNER', sqlColorFirstDescription, 'cfd', 'cfd.color_first_id = cf.id')
      .addParameters({
        lCode: code,
      });

    return await sqlQuery.setDataSource(this.dataSource).getMany();
  }
}
