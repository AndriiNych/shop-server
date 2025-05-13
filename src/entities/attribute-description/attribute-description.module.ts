import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AttributeDescription } from './attribute-description.entity';
import { AttributeDescriptionService } from './attribute-description.service';
import { AttributeDescriptionController } from './attribute-description.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AttributeDescription])],
  controllers: [AttributeDescriptionController],
  providers: [AttributeDescriptionService],
  exports: [AttributeDescriptionService],
})
export class AttributeDescriptionModule {}
