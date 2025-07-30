import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository, SelectQueryBuilder } from 'typeorm';
import { Category } from './category.entity';
import { CategoryResponseBaseDto } from './dto/category.api.base.dto';
import { CategoryParamsDto } from './dto/category.params.dto';
import { CategoryQueryDto } from './dto/category.query.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  public async getAllCategories(categoryQueryDto: CategoryQueryDto) {
    const { _end, _start } = categoryQueryDto;
    console.log(_end, _start);

    const [data, total] = await this.categoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.descriptions', 'descriptions', 'descriptions.language = :lang', {
        lang: 'uk',
      })
      .orderBy('descriptions.name', 'ASC')
      .skip(_start)
      .take(_end - _start)
      .getManyAndCount();

    const dataMaped = data.map(elem => {
      const { descriptions, ...other } = elem;
      return { ...other, name: descriptions[0]?.name ?? '' };
    });

    return [dataMaped, total];
  }

  public async getCategoryById(
    categoryParamsDto: CategoryParamsDto,
  ): Promise<CategoryResponseBaseDto> {
    const { id } = categoryParamsDto;
    return await this.categoryRepository.findOneBy({ id });
  }
}
