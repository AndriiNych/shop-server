import { Injectable } from '@nestjs/common';
import { ColorFirst } from './color-first.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ColorFirstDefaultData } from './json/color-first.json';

@Injectable()
export class ColorFirstService {
  constructor(
    @InjectRepository(ColorFirst)
    private readonly colorFirstRepository: Repository<ColorFirst>,
  ) {}

  public async initStartData() {
    const data = ColorFirstDefaultData;

    const rows = this.colorFirstRepository.create(data);

    return await this.colorFirstRepository.save(rows);
  }

  public async getItemByFilter(filter): Promise<ColorFirst> {
    return await this.colorFirstRepository.findOne({ where: filter });
  }
}
