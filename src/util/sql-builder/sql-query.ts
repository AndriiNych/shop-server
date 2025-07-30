import { DataSource } from 'typeorm';
import { SQLQueryBuilder } from './sql-query-builder';
import { PaginationParams } from '@src/type/pagination.type';
import { SortingArray } from '@src/type/sort.order';
import { FilterType } from '@src/type/filter.type';

export class SqlQuery extends SQLQueryBuilder {
  private dataSource: DataSource;

  public setDataSource(dataSource: DataSource): this {
    this.dataSource = dataSource;
    return this;
  }

  public setSorting(sortingArray: SortingArray = [], defaultSortingArray: SortingArray = []): this {
    const { _sort, _order } = sortingArray[0];
    if (sortingArray.length !== 0 && _sort) {
      this.addOrderBY(_sort, _order);
      return this;
    }

    defaultSortingArray.forEach(sorting => {
      if (sorting._sort) {
        this.addOrderBY(sorting._sort, sorting._order);
      }
    });
    return this;
  }

  public setPagination(pagination: PaginationParams): this {
    const { _start, _end } = pagination;
    if (_start >= 0 && _end >= 0 && _end > _start) {
      this.limit()
        .offset()
        .addParameters({
          limit: _end - _start,
          offset: _start,
        });
    }
    return this;
  }

  public setFilters(filters: FilterType): this {
    if (!filters.length) return this;

    const mapFields = this.selectClause.map(field => {
      const [val, key] = field.split(' AS ');
      return { [key ? key : val]: val };
    });

    filters.forEach(filter => {
      const key = Object.keys(filter)[0];
      const keyStrip = key.replace(/_like$/, '');

      const keyFieldName = mapFields.find(fields => fields[keyStrip])?.[keyStrip];

      this.andWhere(`${keyFieldName} LIKE '%${filter[key]}%'`);
    });

    return this;
  }

  public async getMany(): Promise<any[]> {
    const { sql, params } = this.build();
    // console.log(sql);

    return await this.dataSource.query(sql, params);
  }

  public async getManyAndCount(): Promise<{ data: any[]; total: number }> {
    const { sql, params } = this.build();
    // console.log(sql);
    const { sql: sqlTotal, params: paramsTotal } = this.buildTotal();

    const [data, totalResult] = await Promise.all([
      this.dataSource.query(sql, params),
      this.dataSource.query(sqlTotal, paramsTotal),
    ]);

    const [{ total }] = totalResult;

    return { data, total: Number(total) };
  }
}
