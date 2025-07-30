import { OmitType, PartialType } from '@nestjs/swagger';
import { AttributeValueResponseBaseDto } from './attribute-value.response.base.dto';

export class AttributeValueCreateDto extends PartialType(
  OmitType(AttributeValueResponseBaseDto, ['id']),
) {}
