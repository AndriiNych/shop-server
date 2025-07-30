import { Injectable } from '@nestjs/common';
import { SizeService } from '@src/entities/size/size.service';
import { AttributeValueDescription } from '../attribute-value-description.entity';
import { LanguageService } from '@src/entities/language/language.service';
import { IN_ES_TYPE } from '@src/type/in-es.type';
import { ATTRIBUTE_VALUE } from '@src/type/attribute.value';
import { AttributeValue } from '@src/entities/attribute-value/attribute-value.entity';

@Injectable()
export class SizeCodeDescriptionService {
  constructor(
    private readonly languageService: LanguageService,
    private readonly sizeService: SizeService,
  ) {}

  // public async createSizeDescriptionLanguageList(
  //   attributeValue: AttributeValue,
  // ): Promise<AttributeValueDescription[]> {
  //   return await this.createSizeColorDescriptionLanguageList(attributeValue);
  // }

  public async createSizeColorDescriptionLanguageList(
    attributeValue: AttributeValue,
  ): Promise<AttributeValueDescription[]> {
    const { inLCode: code, id: attributeValueId } = attributeValue;

    const { nmShort: sizeName } = await this.sizeService.getSizeByCode(code);

    const language = await this.languageService.getAll();

    return language.map(({ language: langName }) => {
      const newItem = new AttributeValueDescription();

      newItem.language = langName;
      newItem.attributeValueId = attributeValueId;
      newItem.name = sizeName;
      newItem.sortOrder = 0;
      newItem.inEs = IN_ES_TYPE.CREATE;
      return newItem;
    });
  }
}
