import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AttributeValueDescription } from './attribute-value-description.entity';
import { AttributeValueDescriptionService } from './attribute-value-description.service';
import { AttributeValueDescriptionController } from './attribute-value-description.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AttributeValueDescription])],
  controllers: [AttributeValueDescriptionController],
  providers: [AttributeValueDescriptionService],
  exports: [AttributeValueDescriptionService],
})
export class AttributeValueDescriptionModule {}
