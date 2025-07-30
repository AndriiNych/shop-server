import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AttributeValueDescription } from './attribute-value-description.entity';
import { AttributeValueDescriptionService } from './attribute-value-description.service';
import { AttributeValueDescriptionController } from './attribute-value-description.controller';
import { LanguageModule } from '../language/language.module';
import { ColorCodeDescriptionService } from './service/color-code-description.service';
import { AttributeValueDescriptionGenerate } from './service/attribute-value-description.generate.service';
import { SizeModule } from '../size/size.module';
import { SizeCodeDescriptionService } from './service/size-code-description.service';

@Module({
  imports: [TypeOrmModule.forFeature([AttributeValueDescription]), LanguageModule, SizeModule],
  controllers: [AttributeValueDescriptionController],
  providers: [
    AttributeValueDescriptionService,
    ColorCodeDescriptionService,
    AttributeValueDescriptionGenerate,
    SizeCodeDescriptionService,
  ],
  exports: [AttributeValueDescriptionService],
})
export class AttributeValueDescriptionModule {}
