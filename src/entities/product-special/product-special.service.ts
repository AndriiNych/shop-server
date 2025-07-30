import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository, SelectQueryBuilder } from 'typeorm';
import { ProductSpecial } from './product-special.entity';

@Injectable()
export class ProductSpecialService {
  constructor(
    @InjectRepository(ProductSpecial)
    private readonly productSpecialRepository: Repository<ProductSpecial>,
  ) {}
}
