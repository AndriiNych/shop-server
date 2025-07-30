import { Injectable } from '@nestjs/common';
import { TaskService } from '@src/entities/task/task.servise';
import { ACTION_CRUD } from '@src/type/action.type';
import { DESTINATION_NAME } from '@src/type/destination.type';
import { TASK_NAME } from '@src/type/task.type';
import { getCurrentDate } from '@src/util/date/get-current-date';
import { sendRequests } from '@src/util/internet-store/send.request';

@Injectable()
export class ClearNewService {
  constructor(private readonly taskService: TaskService) {}

  public async handlerNewStickersWhichSales() {
    const result = await this.deleteNewStickersWhichSales();

    const taskList = await this.taskService.getIncompleteTasksByName({
      name: TASK_NAME.SALES_NEW,
    });

    if (taskList.length > 0) {
      await this.taskService.updateTasks(taskList);
      await this.taskService.createTask({
        name: TASK_NAME.SALES_UPDATE,
        description: 'Recalcualte product list in product_category',
        isComplete: false,
      });
    }

    return result;
  }

  private async deleteNewStickersWhichSales() {
    const activeSales = await this.getActiveSalesSet();
    const stickeredProducts = await this.getStickeredProducts();

    const productIdsToRemove = stickeredProducts
      .map(({ product_id }) => product_id)
      .filter(id => activeSales.has(id));

    if (!productIdsToRemove.length) {
      return { message: 'No data available for delete operation.' };
    }

    const requests = this.buildDeleteRequests(productIdsToRemove);
    return await sendRequests(requests);
  }

  private async getActiveSalesSet(): Promise<Set<number>> {
    const currentDate = getCurrentDate();
    const result = await sendRequests({
      action: ACTION_CRUD.SELECT,
      destination: DESTINATION_NAME.PRODUCT_SPECIAL,
      condition: `"${currentDate}" BETWEEN date_start AND date_end`,
    });

    const rows = result[0] || [];
    return new Set(rows.map(row => row.product_id));
  }

  private async getStickeredProducts(): Promise<{ product_id: number }[]> {
    const result = await sendRequests({
      action: ACTION_CRUD.SELECT,
      destination: DESTINATION_NAME.PRODUCT_STICKERS,
      condition: 'sticker_id = 1',
    });

    return result[0] || [];
  }

  private buildDeleteRequests(productIds: number[]) {
    return productIds.map(product_id => ({
      action: ACTION_CRUD.DELETE,
      destination: DESTINATION_NAME.PRODUCT_STICKERS,
      condition: `product_id = ${product_id} AND sticker_id = 1`,
    }));
  }
}
