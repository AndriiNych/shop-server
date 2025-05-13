import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryPath } from './category-path.entity';
import { CategoryPathService } from './category-path.service';
import { CategoryPathController } from './category-path.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryPath])],
  controllers: [CategoryPathController],
  providers: [CategoryPathService],
  exports: [CategoryPathService],
})
export class CategoryPathModule {}
