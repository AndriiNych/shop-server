import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductAttributes } from './product-attributes.entity';

@Injectable()
export class ProductAttributesService {
  constructor(
    @InjectRepository(ProductAttributes)
    private readonly productAttributesRepository: Repository<ProductAttributes>,
  ) {}

  public async getProductAttributes(conditions): Promise<ProductAttributes[]> {
    return await this.productAttributesRepository.find({ where: conditions });
  }

  public async updateParoductAttributesById(id: number, data) {
    return await this.productAttributesRepository.update({ id }, data);
  }

  public async saveProductAttributes(productAttributes): Promise<ProductAttributes[]> {
    const productAttributesNew = this.productAttributesRepository.create(productAttributes);

    return await this.productAttributesRepository.save(productAttributesNew);
  }
}
