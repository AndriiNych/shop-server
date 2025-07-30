import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository, SelectQueryBuilder } from 'typeorm';
import { MenuDescription } from './menu-description.entity';

@Injectable()
export class MenuDescriptionService {
  constructor(
    @InjectRepository(MenuDescription)
    private readonly menuDescriptionRepository: Repository<MenuDescription>,
  ) {}
}
