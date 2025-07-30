import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Color3DefaultData } from './json/color-3.json';
import { Color3 } from './color-3.entity';

@Injectable()
export class Color3Service {
  constructor(
    @InjectRepository(Color3)
    private readonly color3Repository: Repository<Color3>,
  ) {}

  public async initStartData() {
    const data = Color3DefaultData;

    const rows = this.color3Repository.create(data);

    return await this.color3Repository.save(rows);
  }
}
