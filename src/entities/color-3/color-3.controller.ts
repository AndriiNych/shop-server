import { Controller, Get, Post } from '@nestjs/common';
import { TABLE_NAMES } from '@src/db/const-tables';
import { getPoint } from '@src/util/api-site/get.point';
import { Color3Service } from './color-3.service';

@Controller(getPoint(TABLE_NAMES.color_3))
export class Color3Controller {
  constructor(private readonly color3Service: Color3Service) {}

  // @Post('/init')
  // async initStartData() {
  //   return this.color3Service.initStartData();
  // }
}
