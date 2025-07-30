import { Controller, Get, Post } from '@nestjs/common';
import { TABLE_NAMES } from '@src/db/const-tables';
import { getPoint } from '@src/util/api-site/get.point';
import { ColorFirstService } from './color-first.service';

@Controller(getPoint(TABLE_NAMES.color_first))
export class ColorFirstController {
  constructor(private readonly colorFirstService: ColorFirstService) {}

  //   @Post('/init')
  //   async initStartData() {
  //     return this.colorFirstService.initStartData();
  //   }
}
