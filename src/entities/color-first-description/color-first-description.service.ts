import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { ColorFirstDescription } from './color-first-description.entity';
import { DataSource, Repository } from 'typeorm';
import { colorFirstDescriptionDefaultData } from './json/color-first.description.json';
import { SqlQuery } from '@src/util/sql-builder/sql-query';

type ColorFirstDescriptionType = Partial<InstanceType<typeof ColorFirstDescription>>;

@Injectable()
export class ColorFirstDescriptionService {
  constructor(
    @InjectRepository(ColorFirstDescription)
    private readonly colorFirstDescriptionRepository: Repository<ColorFirstDescription>,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  public async initStartData() {
    const data = colorFirstDescriptionDefaultData;

    const rows = this.colorFirstDescriptionRepository.create(data);

    return await this.colorFirstDescriptionRepository.save(rows);
  }

  public async getColorFirst(
    conditions: ColorFirstDescriptionType,
  ): Promise<ColorFirstDescription[]> {
    return await this.colorFirstDescriptionRepository.find({ where: conditions });
  }

  public async getColorFirstDescriptionByCode(
    code: string,
    languageId: number,
  ): Promise<ColorFirstDescription[]> {
    const sqlQuery = new SqlQuery();

    const sqlColorFirstDescription =
      '(SELECT * FROM sw_color_first_description WHERE language_id = :langId)';

    sqlQuery
      .select([
        'cfd.id as id',
        'cfd.color_first_id as color_first_id',
        'cfd.language_id as language_id',
        'cfd.description as description',
      ])
      .from('(SELECT * FROM sw_color_first WHERE code = :lCode) cf')
      .addJoin('INNER', sqlColorFirstDescription, 'cfd', 'cfd.color_first_id = cf.id')
      .addParameters({
        langId: languageId,
        lCode: code,
      });

    return await sqlQuery.setDataSource(this.dataSource).getMany();
  }
}
