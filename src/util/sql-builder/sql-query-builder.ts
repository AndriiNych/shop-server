import { JoinTypes } from '@src/type/join.type';
import { SortOrder } from '@src/type/sort.order';

type ParamValue = Record<string, any>;

export class SQLQueryBuilder {
  protected selectClause: string[] = [];
  private fromClause = '';
  private joinClause: string[] = [];
  private whereClause: string[] = [];
  private orderClause: string[] = [];
  private limitClause = '';
  private offsetClause = '';
  private params: ParamValue = {};

  public select(fields: string[]): this {
    this.selectClause = [...fields];
    return this;
  }

  public from(table: string, alias?: string): this {
    this.fromClause = alias ? `${table} AS ${alias}` : table;
    return this;
  }

  public addJoin(type: JoinTypes, table: string, alias: string, condition: string): this {
    this.joinClause.push(`${type} JOIN ${table} AS ${alias} ON ${condition}`);
    return this;
  }

  public andWhere(condition: string): this {
    this.whereClause.push(condition);
    return this;
  }

  public addOrderBY(field: string, direction: SortOrder = 'ASC'): this {
    this.orderClause.push(`${field} ${direction}`);
    return this;
  }

  public limit(paramName: string = ':limit'): this {
    this.limitClause = `LIMIT ${paramName}`;
    return this;
  }

  public offset(paramName: string = ':offset'): this {
    this.offsetClause = `OFFSET ${paramName}`;
    return this;
  }

  public addParameters(params: ParamValue): this {
    Object.assign(this.params, params);
    return this;
  }

  public buildTotal(): { sql: string; params: any[] } {
    const where = this.whereClause.length > 0 ? 'WHERE ' + this.whereClause.join(' AND ') : '';

    const sql = [`SELECT Count(*) as total`, `FROM ${this.fromClause}`, ...this.joinClause, where]
      .filter(Boolean)
      .join(' ');

    return { ...this.transformSqlParams(sql, this.params) };
  }

  public build(): { sql: string; params: any[] } {
    const where = this.whereClause.length > 0 ? 'WHERE ' + this.whereClause.join(' AND ') : '';
    const orderBy = this.orderClause.length > 0 ? 'ORDER BY ' + this.orderClause.join(', ') : '';
    const sql = [
      `SELECT ${this.selectClause.join(', ')}`,
      `FROM ${this.fromClause}`,
      ...this.joinClause,
      where,
      orderBy,
      this.limitClause,
      this.offsetClause,
    ]
      .filter(Boolean)
      .join(' ');

    return { ...this.transformSqlParams(sql, this.params) };
  }

  private transformSqlParams(sqlIn: string, paramsIn: ParamValue): { sql: string; params: any[] } {
    const paramNames = sqlIn.match(/:\w+/g)?.map(p => p.slice(1)) ?? [];

    const params = paramNames.map(param => paramsIn[param]);
    const sql = sqlIn.replace(/:\w+/g, '?');

    return { sql, params };
  }
}
