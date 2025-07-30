import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository, SelectQueryBuilder } from 'typeorm';
import { MenuPath } from './menu-path.entity';

@Injectable()
export class MenuPathService {
  constructor(
    @InjectRepository(MenuPath)
    private readonly menuPathRepository: Repository<MenuPath>,
  ) {}
}
