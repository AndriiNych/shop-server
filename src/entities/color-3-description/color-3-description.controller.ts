import { Controller, Post } from '@nestjs/common';
import { TABLE_NAMES } from '@src/db/const-tables';
import { getPoint } from '@src/util/api-site/get.point';
import { Color3DescriptionService } from './color-3-description.service';

@Controller(getPoint(TABLE_NAMES.color_3_description))
export class Color3DescriptionController {
  constructor(private readonly color3DescriptionService: Color3DescriptionService) {}

  @Post('/init')
  async initStartData() {
    return await this.color3DescriptionService.initStartData();
  }
}
