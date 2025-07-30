import { Body, Controller, Get, Param, Patch, Post, Put, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { TABLE_NAMES } from '@src/db/const-tables';
import { CategoryService } from './category.service';
import { CategoryParamsDto } from './dto/category.params.dto';
import { CategoryQueryDto } from './dto/category.query.dto';

// @ApiBearerAuth()
// @ApiTags(TABLE_NAMES.customer)
// @Controller(TABLE_NAMES.category)
@Controller('/api/categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('/')
  async getAllCategories(
    @Query() categoryQueryDto: CategoryQueryDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const [data, total] = await this.categoryService.getAllCategories(categoryQueryDto);

    response.setHeader('X-Total-Count', total.toString());
    response.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');

    return data;
  }

  @Get('/:id')
  async getCategoryById(@Param() categoryParamsDto: CategoryParamsDto) {
    return await this.categoryService.getCategoryById(categoryParamsDto);
  }
}
