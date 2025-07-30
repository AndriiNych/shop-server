import { FIELDS_LENGTH } from '@src/db/const-fields';
import { TASK_NAME_ARRAY } from '@src/type/task.type';
import { IsBoolean, IsIn, IsString, Max } from 'class-validator';

export class TaskApiBaseDto {
  @IsString()
  @IsIn(TASK_NAME_ARRAY)
  name: string;

  @IsString()
  @Max(FIELDS_LENGTH.VARCHAR.BASE)
  description?: string;

  @IsBoolean()
  isComplete?: boolean;
}
