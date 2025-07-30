import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategory } from './product-category.entity';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategory)
    private readonly productCategoryRepository: Repository<ProductCategory>,
  ) {}

  public async getProductCategory(conditions): Promise<ProductCategory[]> {
    return await this.productCategoryRepository.find({ where: conditions });
  }

  public async updateProductAttributesById(id: number, data) {
    return await this.productCategoryRepository.update({ id }, data);
  }

  public async saveProductCategory(productCategory): Promise<ProductCategory[]> {
    const productCategoryNew = this.productCategoryRepository.create(productCategory);

    return await this.productCategoryRepository.save(productCategoryNew);
  }
}
