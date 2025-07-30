import { Controller } from '@nestjs/common';
import { TABLE_NAMES } from '@src/db/const-tables';
import { getPoint } from '@src/util/api-site/get.point';

@Controller(getPoint(TABLE_NAMES.item_type_description))
export class ItemTypeDescriptionController {}
