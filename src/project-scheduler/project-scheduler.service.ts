import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { BalanceRecalculateService } from './tasks/balance-recalculate.service';
import { TaskService } from '@src/entities/task/task.servise';
import { TASK_NAME, TaskNameType } from '@src/type/task.type';
import { ClearNewService } from './tasks/clear-new.service';
import { SalesListRecalculateService } from './tasks/sales-list-recalculate.service';

@Injectable()
export class ProjectSchedulerService {
  constructor(
    private readonly taskService: TaskService,
    private readonly balanceRecaluclateService: BalanceRecalculateService,
    private readonly clearNewService: ClearNewService,
    private readonly salesListRecalculateService: SalesListRecalculateService,
  ) {}

  // @Cron(CronExpression.EVERY_30_SECONDS)
  // async handleDalayTask30Sec() {
  //   await this.checkTaskList();
  // }

  @Cron(CronExpression.EVERY_DAY_AT_4AM)
  async processNightlyJobs() {
    await this.salesListRecalculateService.updateSalesCategory();
  }

  @Cron(CronExpression.EVERY_30_MINUTES)
  async handleDelayTask() {
    await this.checkTaskList();
  }

  private async checkTaskList() {
    const taskList = await this.taskService.getIncompleteTasks();

    const taskNames = Array.from(new Set(taskList.map(task => task.name)));
    console.log(taskNames);

    const result = await Promise.all(
      taskNames.map(async taskName => {
        const handler = this.taskDispatcher.get(taskName) ?? (async () => '');
        return await handler();
      }),
    );

    return result;
  }

  private taskDispatcher = new Map<TaskNameType, () => Promise<any>>([
    [TASK_NAME.BALANS, () => this.balanceRecaluclateService.balanceRecalculate()],
    [TASK_NAME.SALES_NEW, () => this.clearNewService.handlerNewStickersWhichSales()],
    [TASK_NAME.SALES_UPDATE, () => this.salesListRecalculateService.taskUpdateSalesCategory()],
  ]);
}
