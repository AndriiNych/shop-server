import { TASK_NAME_ARRAY } from '@src/type/task.type';
import { IsIn, IsNumber, IsString } from 'class-validator';

export class TaskParamsDto {
  @IsNumber()
  id: number;

  @IsString()
  @IsIn(TASK_NAME_ARRAY)
  name: string;
}
