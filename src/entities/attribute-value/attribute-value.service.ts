import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AttributeValue } from './attribute-value.entity';
import { AttributeValueSynchronizeService } from './service/attribute-value.synchronize.service';

@Injectable()
export class AttributeValueService {
  constructor(
    @InjectRepository(AttributeValue)
    private readonly attributeValueRepository: Repository<AttributeValue>,
    private readonly attributeValueSynchronizeService: AttributeValueSynchronizeService,
  ) {}

  public async getAttributeValueByCondition(
    condition: Partial<AttributeValue>,
  ): Promise<AttributeValue> {
    return await this.attributeValueRepository.findOne({ where: condition });
  }

  public async saveAttributeValues(records: AttributeValue[]): Promise<AttributeValue[]> {
    return await this.attributeValueRepository.save(records);
  }

  public async syncAttributeValue(): Promise<AttributeValue[]> {
    return await this.attributeValueSynchronizeService.syncAttributeValue();
  }

  // public async test(): Promise<any> {
  //   return await this.sizeService.getNewSizeCode();
  // }
}
