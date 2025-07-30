import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ProjectSchedulerService } from './project-scheduler.service';
import { TaskModule } from '@src/entities/task/task.module';
import { BalanceRecalculateService } from './tasks/balance-recalculate.service';
import { ProductModule } from '@src/entities/product/product.module';
import { ProjectSchedulerController } from './project-scheduler.controller';
import { ClearNewService } from './tasks/clear-new.service';
import { SalesListRecalculateService } from './tasks/sales-list-recalculate.service';

@Module({
  imports: [ScheduleModule.forRoot(), TaskModule, ProductModule],
  controllers: [ProjectSchedulerController],
  providers: [
    ProjectSchedulerService,
    BalanceRecalculateService,
    ClearNewService,
    SalesListRecalculateService,
  ],
})
export class ProjectSchedulerModule {}
