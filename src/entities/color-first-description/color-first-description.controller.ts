import { Controller, Post } from '@nestjs/common';
import { TABLE_NAMES } from '@src/db/const-tables';
import { getPoint } from '@src/util/api-site/get.point';
import { ColorFirstDescriptionService } from './color-first-description.service';

@Controller(getPoint(TABLE_NAMES.color_first_description))
export class ColorFirstDescriptionController {
  constructor(private readonly colorFirstDescriptionService: ColorFirstDescriptionService) {}

  //   @Post('/init')
  //   async initStartData() {
  //     return this.colorFirstDescriptionService.initStartData();
  //   }
}
