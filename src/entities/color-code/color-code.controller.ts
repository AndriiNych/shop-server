import { Controller, Get } from '@nestjs/common';
import { TABLE_NAMES } from '@src/db/const-tables';
import { getPoint } from '@src/util/api-site/get.point';
import { ColorCodeService } from './color-code.service';

@Controller(getPoint(TABLE_NAMES.color_code))
export class ColorCodeController {
  constructor(private readonly colorCodeService: ColorCodeService) {}

  @Get('\synch')
  async createAllCodeColorDescription() {
    return await this.colorCodeService.createAllCodeColorDescription();
  }
}
