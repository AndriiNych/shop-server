import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AttributeValue } from '../attribute-value.entity';
import { Repository } from 'typeorm';
import { ColorCodeService } from './color-code.service';
import { SizeCodeService } from './size-code.service';

@Injectable()
export class AttributeValueSynchronizeService {
  constructor(
    @InjectRepository(AttributeValue)
    private readonly attributeValueRepository: Repository<AttributeValue>,
    private readonly colorCodeService: ColorCodeService,
    private readonly sizeCodeService: SizeCodeService,
  ) {}

  public async syncAttributeValue(): Promise<AttributeValue[]> {
    const syncColorCodes = await this.syncColorCode();

    const syncSize = await this.sizeCodeService.getNewSizeCode();

    return [...syncColorCodes, ...syncSize];
  }

  private async syncColorCode(): Promise<AttributeValue[]> {
    const dataForInsert = await this.colorCodeService.getNewColorCode();

    return await this.attributeValueRepository.save(dataForInsert);
  }
}
