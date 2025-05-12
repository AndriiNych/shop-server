import { Controller, Get } from '@nestjs/common';
import { NewSiteService } from './new-site.service';

@Controller('new-site')
export class NewSiteController {
  constructor(private readonly newSiteService: NewSiteService) {}

  @Get()
  async getData() {
    return await this.newSiteService.getDataFromLocalDb();
  }
}
