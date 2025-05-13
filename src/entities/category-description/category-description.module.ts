import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryDescription } from './category-description.entity';
import { CategoryDescriptionService } from './category-description.service';
import { CategoryDescriptionController } from './category-description.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryDescription])],
  controllers: [CategoryDescriptionController],
  providers: [CategoryDescriptionService],
  exports: [CategoryDescriptionService],
})
export class CategoryDescriptionModule {}
