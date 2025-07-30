import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskApiBaseDto } from './dto/task.api.base.dto';
import { TaskRequestDto } from './dto/task.request.dto';
import { TaskIncompleteParamsDto } from './dto/task.incomplete.params.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  public async createTask(task: TaskApiBaseDto): Promise<TaskRequestDto> {
    return await this.taskRepository.create(task);
  }

  public async getIncompleteTasksByName(
    taskParams: TaskIncompleteParamsDto,
  ): Promise<TaskRequestDto[]> {
    const { name } = taskParams;
    return await this.taskRepository.find({ where: { name, isComplete: false } });
  }

  public async getIncompleteTasks(): Promise<TaskRequestDto[]> {
    return await this.taskRepository.find({ where: { isComplete: false } });
  }

  public async updateTasks(taskListForUpdate: TaskRequestDto[]): Promise<boolean> {
    const ids = taskListForUpdate.map(task => task.id);

    const result = await this.taskRepository.update({ id: In(ids) }, { isComplete: true });

    return result.affected && result.affected > 0;
  }
}
