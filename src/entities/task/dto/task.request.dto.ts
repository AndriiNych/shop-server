import { Expose } from 'class-transformer';

export class TaskRequestDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  isComplete: boolean;

  @Expose()
  inCreatedAt: Date;

  @Expose()
  inUpdatedAt: Date;
}
