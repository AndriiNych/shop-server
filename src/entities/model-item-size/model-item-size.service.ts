import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ModelItemSize } from './model-item-size.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ModelItemSizeService {
  constructor(
    @InjectRepository(ModelItemSize)
    private readonly modelItemSizeRepository: Repository<ModelItemSize>,
  ) {}

  public async getModelItemSizeByVendorCode(vendorCode: string): Promise<ModelItemSize> {
    return await this.modelItemSizeRepository.findOne({
      where: { vendorCode: vendorCode.slice(0, 11) },
    });
  }
}
