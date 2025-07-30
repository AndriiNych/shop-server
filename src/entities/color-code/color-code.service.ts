import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ColorCode } from './color-code.entity';
import { Repository } from 'typeorm';
import { getDbAccess } from '@src/util/mdb';
import { ColorCodeDescriptionService } from '../color-code-description/color-code-description.service';
import { ColorCodeDescription } from '../color-code-description/color-code-description.entity';

export type ColorCodeType = InstanceType<typeof ColorCode>;

@Injectable()
export class ColorCodeService {
  constructor(
    @InjectRepository(ColorCode)
    private readonly colorCodeRepository: Repository<ColorCode>,
    private readonly colorCodeDescriptionService: ColorCodeDescriptionService,
  ) {}

  public async synchronizeWithInternalDb() {}

  public async createAllCodeColorDescription(): Promise<ColorCodeDescription[]> {
    const colorCodeList = await this.colorCodeRepository.find();

    const result = await Promise.all(
      colorCodeList.map(
        async conditions => await this.saveCodeColorDescriptionForColorCode(conditions),
      ),
    );

    return result.flat();
  }

  private async saveCodeColorDescriptionForColorCode(
    conditions: ColorCodeType,
  ): Promise<ColorCodeDescription[]> {
    return await this.colorCodeDescriptionService.saveColorCodeDescriptionByColorCode(conditions);
  }
}
