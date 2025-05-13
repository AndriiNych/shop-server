import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AttributeValue } from './attribute-value.entity';
import { AttributeValueService } from './attribute-value.service';
import { AttributeValueController } from './attribute-value.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AttributeValue])],
  controllers: [AttributeValueController],
  providers: [AttributeValueService],
  exports: [AttributeValueService],
})
export class AttributeValueModule {}
