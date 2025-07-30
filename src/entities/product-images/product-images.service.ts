import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository, SelectQueryBuilder } from 'typeorm';
import { ProductImages } from './product-images.entity';

@Injectable()
export class ProductImagesService {
  constructor(
    @InjectRepository(ProductImages)
    private readonly productImagesRepository: Repository<ProductImages>,
  ) {}
}
