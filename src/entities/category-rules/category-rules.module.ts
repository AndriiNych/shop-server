import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRules } from './category-rules.entity';
import { CategoryRulesController } from './category-rules.controller';
import { CategoryRulesService } from './category-rules.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryRules])],
  controllers: [CategoryRulesController],
  providers: [CategoryRulesService],
  exports: [CategoryRulesService],
})
export class CategoryRulesModule {}
