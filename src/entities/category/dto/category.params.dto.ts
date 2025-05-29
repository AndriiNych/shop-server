import { PickType } from '@nestjs/swagger';
import { CategoryResponseBaseDto } from './category.response.base.dto';

export class CategoryParamsDto extends PickType(CategoryResponseBaseDto, ['id'] as const) {}
