import { FilterType } from '@src/type/filter.type';
import { PaginationParams } from '@src/type/pagination.type';
import { SortingArray } from '@src/type/sort.order';
import { Expose } from 'class-transformer';

export class QueryPipeDto {
  @Expose()
  sort: SortingArray;

  @Expose()
  pagination: PaginationParams;

  @Expose()
  filters: FilterType;
}
