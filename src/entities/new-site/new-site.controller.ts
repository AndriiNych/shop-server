import { Body, Controller, Get } from '@nestjs/common';
import { NewSiteService } from './new-site.service';
import { NewSiteBodyDto } from './dto/new-site.body.dto';

@Controller('new-site')
export class NewSiteController {
  constructor(private readonly newSiteService: NewSiteService) {}

  @Get()
  async getData(@Body() bodyNewSite: NewSiteBodyDto) {
    return await this.newSiteService.getDataFromLocalDb(bodyNewSite);
  }
}
