import { Injectable } from '@nestjs/common';
import { ProductUpdateBalance } from '@src/entities/product/dto/product.update.balance.dto';
import { ProductService } from '@src/entities/product/product.service';
import { TaskIncompleteParamsDto } from '@src/entities/task/dto/task.incomplete.params.dto';
import { TaskRequestDto } from '@src/entities/task/dto/task.request.dto';
import { TaskService } from '@src/entities/task/task.servise';
import { sendUpdateRequest } from '@src/util/internet-store/data.update';
import { IS_TABLE_LIST } from '@src/util/internet-store/table-list';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class BalanceRecalculateService {
  constructor(
    private readonly taskService: TaskService,
    private readonly productService: ProductService,
  ) {}

  public async balanceRecalculate(): Promise<void> {
    const taskList = await this.getListIncompleteTaskByName({ name: 'balance' });
    if (taskList.length > 0) {
      const isUpdatedProducts = await this.performUpdatedProductInWebsite();
      // TODO Implement logging for success or error results.
      if (isUpdatedProducts) {
        const isCloseTasks = await this.taskService.updateTasks(taskList);
      }
    }
  }

  private async performUpdatedProductInWebsite(): Promise<boolean> {
    console.log('start Recalculate');

    const productList = await this.getProductList();

    return await sendUpdateRequest(IS_TABLE_LIST.PRODUCT, productList);
  }

  private async getProductList(): Promise<ProductUpdateBalance[]> {
    const productList = await this.productService.getAllProductList();
    return plainToInstance(ProductUpdateBalance, productList, {
      excludeExtraneousValues: true,
    });
  }

  private async getListIncompleteTaskByName(
    name: TaskIncompleteParamsDto,
  ): Promise<TaskRequestDto[]> {
    return await this.taskService.getIncompleteTasksByName(name);
  }
}
