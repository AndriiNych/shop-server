import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository, SelectQueryBuilder } from 'typeorm';
import { AttributeDescription } from './attribute-description.entity';

@Injectable()
export class AttributeDescriptionService {
  constructor(
    @InjectRepository(AttributeDescription)
    private readonly attributeDescriptionRepository: Repository<AttributeDescription>,
  ) {}
}
