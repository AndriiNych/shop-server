import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Color3Description } from './color-3-description.entity';
import { Repository } from 'typeorm';
import { color3DescriptionDefaultData } from './json/color-3.description.json';

@Injectable()
export class Color3DescriptionService {
  constructor(
    @InjectRepository(Color3Description)
    private readonly color3DescriptionRepository: Repository<Color3Description>,
  ) {}

  public async initStartData() {
    const data = color3DescriptionDefaultData;

    const rows = this.color3DescriptionRepository.create(data);

    return await this.color3DescriptionRepository.save(rows);
  }
}
