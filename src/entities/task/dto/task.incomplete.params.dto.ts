import { PickType } from '@nestjs/swagger';
import { TaskParamsDto } from './task.params.dto';

export class TaskIncompleteParamsDto extends PickType(TaskParamsDto, ['name'] as const) {}
