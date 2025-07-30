import { Controller, Get } from '@nestjs/common';
import { ClearNewService } from './tasks/clear-new.service';
import { SalesListRecalculateService } from './tasks/sales-list-recalculate.service';

@Controller('/api/project-scheduler')
export class ProjectSchedulerController {
  constructor(
    private readonly clearNewService: ClearNewService,
    private readonly salesListRecalculateService: SalesListRecalculateService,
  ) {}

  @Get()
  async setSpecialList() {
    console.log('getSpecialList');

    return await this.salesListRecalculateService.updateSalesCategory();
  }
}
