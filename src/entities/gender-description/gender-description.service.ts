import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { GenderDescription } from './gender-description.entity';
import { DataSource, Repository } from 'typeorm';
import { SqlQuery } from '@src/util/sql-builder/sql-query';

@Injectable()
export class GenderDescriptionService {
  constructor(
    @InjectRepository(GenderDescription)
    private readonly genderDescriptionRepository: Repository<GenderDescription>,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  public async getGenderDescription(
    code: string,
    languageId: number,
  ): Promise<GenderDescription[]> {
    const sqlQuery = new SqlQuery();

    const sqlGenderDescription =
      '(SELECT * FROM sw_gender_description WHERE language_id = :langId)';

    sqlQuery
      .select([
        'gd.id as id',
        'gd.language_id as language_id',
        'gd.gender_id as gender_id',
        'gd.description as description',
      ])
      .from('(SELECT * FROM sw_gender WHERE code = :lCode) g')
      .addJoin('INNER', sqlGenderDescription, 'gd', 'gd.gender_id = g.id')
      .addParameters({
        langId: languageId,
        lCode: code,
      });

    const result = await sqlQuery.setDataSource(this.dataSource).getMany();
    return result;
  }
}
