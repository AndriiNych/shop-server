import { IS_TABLE_LIST_AS_ARRAY, IsTableListType } from '@src/util/internet-store/table-list';
import { IsArray, IsIn } from 'class-validator';

export class NewSiteBodyDto {
  @IsArray()
  @IsIn(IS_TABLE_LIST_AS_ARRAY, { each: true })
  tables: IsTableListType[];
}
