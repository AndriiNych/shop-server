import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemType } from './item-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemTypeService {
  constructor(
    @InjectRepository(ItemType)
    private readonly itemTypeRepository: Repository<ItemType>,
  ) {}
}
