import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRules } from './category-rules.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryRulesService {
  constructor(
    @InjectRepository(CategoryRules)
    private readonly categoryRulesRepository: Repository<CategoryRules>,
  ) {}

  public async getCategoryRulesList(): Promise<CategoryRules[]> {
    return await this.categoryRulesRepository.find();
  }
}
