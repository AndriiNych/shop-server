import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository, SelectQueryBuilder } from 'typeorm';
import { CategoryPath } from './category-path.entity';

@Injectable()
export class CategoryPathService {
  constructor(
    @InjectRepository(CategoryPath)
    private readonly categoryPathRepository: Repository<CategoryPath>,
  ) {}
}
