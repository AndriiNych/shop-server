import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AttributeValueDescription } from './attribute-value-description.entity';
import { AttributeValueDescriptionGenerate } from './service/attribute-value-description.generate.service';

@Injectable()
export class AttributeValueDescriptionService {
  constructor(
    @InjectRepository(AttributeValueDescription)
    private readonly attributeValueDescriptionRepository: Repository<AttributeValueDescription>,
    private readonly attributeValueDescriptionGenerate: AttributeValueDescriptionGenerate,
  ) {}

  public async synchWithAttributeValue(): Promise<AttributeValueDescription[]> {
    const newAttributeValueDescription =
      await this.attributeValueDescriptionGenerate.generateEntriesForNewAttributeValue();
    const dataForSave = this.attributeValueDescriptionRepository.create(
      newAttributeValueDescription,
    );
    return this.attributeValueDescriptionRepository.save(dataForSave);
  }
}
