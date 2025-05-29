import { Body, Controller, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TABLE_NAMES } from '@src/db/const-tables';
import { CategoryService } from './category.service';
import { CategoryParamsDto } from './dto/category.params.dto';

// @ApiBearerAuth()
// @ApiTags(TABLE_NAMES.customer)
// @Controller(TABLE_NAMES.category)
@Controller('/api/categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('/')
  async getAllCategories() {
    console.log('Request categories');
    return await this.categoryService.getAllCategories();
  }

  @Get('/:id')
  async getCategoryById(@Param() categoryParam: CategoryParamsDto) {
    return await this.categoryService.getCategoryById(categoryParam);
  }
}
