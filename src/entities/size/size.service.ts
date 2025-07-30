import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Size } from './size.entity';
import { Repository } from 'typeorm';

type SizeType = Partial<InstanceType<typeof Size>>;

@Injectable()
export class SizeService {
  constructor(
    @InjectRepository(Size)
    private readonly sizeRepository: Repository<Size>,
  ) {}

  public async getSizeByCode(code: string): Promise<Size> {
    return await this.sizeRepository.findOne({ where: { code } });
  }

  public async getSize(conditions: SizeType): Promise<Size> {
    return await this.sizeRepository.findOne({ where: conditions });
  }
}
