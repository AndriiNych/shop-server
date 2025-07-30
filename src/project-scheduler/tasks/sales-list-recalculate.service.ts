import { Injectable } from '@nestjs/common';
import { TaskService } from '@src/entities/task/task.servise';
import { ACTION_CRUD } from '@src/type/action.type';
import { DESTINATION_NAME } from '@src/type/destination.type';
import { PRODUCT_CATEGORY } from '@src/type/product.category.type';
import { TASK_NAME } from '@src/type/task.type';
import { getCurrentDate } from '@src/util/date/get-current-date';
import { sendRequests } from '@src/util/internet-store/send.request';

@Injectable()
export class SalesListRecalculateService {
  constructor(private readonly taskService: TaskService) {}

  public async updateSalesCategory(): Promise<any[]> {
    const [promoProductSet, salesCategoryProductList] = await Promise.all([
      this.getActiveSalesSet(),
      this.getProductListFromSalesCategory(),
    ]);

    const dataToInsert = this.getProductListForInsertIntoSalesCategory(
      promoProductSet,
      salesCategoryProductList,
    );
    const dataToRemove = this.getProductListForRemoveFromSalesCategory(
      promoProductSet,
      salesCategoryProductList,
    );

    const resultInsert = await this.insertProductIntoSalesCategory(dataToInsert);
    const resultRemove = await this.removeProductFromSalesCategory(dataToRemove);

    return [resultInsert, resultRemove];
  }

  public async taskUpdateSalesCategory() {
    await this.updateSalesCategory();

    const taskList = await this.taskService.getIncompleteTasksByName({
      name: TASK_NAME.SALES_UPDATE,
    });

    if (taskList.length > 0) {
      await this.taskService.updateTasks(taskList);
    }
  }

  private async insertProductIntoSalesCategory(productList: number[]): Promise<any[]> {
    const requestToInsert = [
      {
        action: ACTION_CRUD.INSERT,
        destination: DESTINATION_NAME.PRODUCT_CATEGORY,
        data: productList.map(productId => ({
          product_id: productId,
          category_id: PRODUCT_CATEGORY.SALES,
          sort_order: 0,
        })),
      },
    ];

    return await sendRequests(requestToInsert);
  }

  private async removeProductFromSalesCategory(productList: number[]): Promise<any[]> {
    const requestToRemove = productList.map(productId => ({
      action: ACTION_CRUD.DELETE,
      destination: DESTINATION_NAME.PRODUCT_CATEGORY,
      condition: `product_id = ${productId} and category_id = ${PRODUCT_CATEGORY.SALES}`,
    }));

    return await sendRequests(requestToRemove);
  }

  private getProductListForInsertIntoSalesCategory(
    promotionalProducts: Set<number>,
    productList: number[],
  ): number[] {
    const productSet = new Set(productList);

    return [...promotionalProducts].filter(productId => !productSet.has(productId));
  }

  private getProductListForRemoveFromSalesCategory(
    promotionalProducts: Set<number>,
    productList: number[],
  ): number[] {
    return productList.filter(productId => !promotionalProducts.has(productId));
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

  private async getProductListFromSalesCategory(): Promise<number[]> {
    const result = await sendRequests({
      action: ACTION_CRUD.SELECT,
      destination: DESTINATION_NAME.PRODUCT_CATEGORY,
      condition: `category_id = ${PRODUCT_CATEGORY.SALES}`,
    });

    return result[0]?.map(({ product_id }) => product_id) || [];
  }
}
