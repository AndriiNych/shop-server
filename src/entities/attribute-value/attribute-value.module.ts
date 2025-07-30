import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AttributeValue } from './attribute-value.entity';
import { AttributeValueService } from './attribute-value.service';
import { AttributeValueController } from './attribute-value.controller';
import { ColorCodeService } from './service/color-code.service';
import { AttributeValueSynchronizeService } from './service/attribute-value.synchronize.service';
import { SizeCodeService } from './service/size-code.service';

@Module({
  imports: [TypeOrmModule.forFeature([AttributeValue])],
  controllers: [AttributeValueController],
  providers: [
    AttributeValueService,
    AttributeValueSynchronizeService,
    ColorCodeService,
    SizeCodeService,
  ],
  exports: [AttributeValueService],
})
export class AttributeValueModule {}
