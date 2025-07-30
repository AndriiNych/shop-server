import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemTypeDescription } from './item-type-description.entity';
import { Repository } from 'typeorm';

type ItemTypeDescriptionType = Partial<InstanceType<typeof ItemTypeDescription>>;

@Injectable()
export class ItemTypeDescriptionService {
  constructor(
    @InjectRepository(ItemTypeDescription)
    private readonly itemTypeDescriptionRepository: Repository<ItemTypeDescription>,
  ) {}

  public async getItemTypeDescription(
    conditions: ItemTypeDescriptionType,
  ): Promise<ItemTypeDescription[]> {
    return await this.itemTypeDescriptionRepository.find({ where: conditions });
  }
}
