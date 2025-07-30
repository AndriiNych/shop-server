import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TABLE_NAMES } from '@src/db/const-tables';
import { TaskService } from './task.servise';
import { TaskIncompleteParamsDto } from './dto/task.incomplete.params.dto';
import { TaskApiBaseDto } from './dto/task.api.base.dto';

@Controller(TABLE_NAMES.task)
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/:name')
  async getIncompleteTasksByName(@Param() taskParams: TaskIncompleteParamsDto) {
    return await this.taskService.getIncompleteTasksByName(taskParams);
  }

  @Post('/')
  async createTask(@Body() task: TaskApiBaseDto) {
    return await this.taskService.createTask(task);
  }
}
