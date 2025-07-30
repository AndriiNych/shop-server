import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { QueryPipeDto } from './query.pipe.dto';
import { SortOrder } from '@src/type/sort.order';

@Injectable()
export class ParseQueryPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): QueryPipeDto {
    console.log(value);

    const dto = new QueryPipeDto();

    dto.pagination = {};
    dto.sort = [{}];
    dto.filters = [];

    Object.entries(value).forEach(([key, val]) => {
      if (val !== undefined && val !== null) {
        switch (key) {
          case '_end':
          case '_start':
            dto.pagination[key] = Number(val);
            break;
          case '_sort':
            dto.sort[0][key] = val.toString();
            break;
          case '_order':
            dto.sort[0][key] = val as SortOrder;
            break;
          default:
            dto.filters.push({ [key]: val.toString() });
        }
      }
    });

    return dto;
  }
}
