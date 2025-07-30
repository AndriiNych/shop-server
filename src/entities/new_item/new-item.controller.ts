import { Body, Controller, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TABLE_NAMES } from '@src/db/const-tables';
import { NewItemService } from './new-item.service';
import { getPoint } from '@src/util/api-site/get.point';

// @ApiBearerAuth()
// @ApiTags(TABLE_NAMES.customer)
@Controller(getPoint(TABLE_NAMES.new_item))
export class NewItemController {
  constructor(private readonly newItemService: NewItemService) {}

  @Get('/synch')
  async getSynch() {
    // return await this.newItemService.createProductDescription('19173723842.2J6', 1);
    // return await this.newItemService.sss();
    return await this.newItemService.moveToSite();
  }
}
