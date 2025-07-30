import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDescription } from './product-description.entity';

@Injectable()
export class ProductDescriptionService {
  constructor(
    @InjectRepository(ProductDescription)
    private readonly productDescriptionRepository: Repository<ProductDescription>,
  ) {}

  public async getProductDescription(conditions): Promise<ProductDescription[]> {
    return await this.productDescriptionRepository.find({ where: conditions });
  }

  public async saveProductDescription(productdescription): Promise<ProductDescription[]> {
    const productDescriptionList = this.productDescriptionRepository.create(productdescription);

    return await this.productDescriptionRepository.save(productDescriptionList);
  }

  public async updateProductDescriptionById(id: number, data) {
    return await this.productDescriptionRepository.update({ id }, data);
  }
}
