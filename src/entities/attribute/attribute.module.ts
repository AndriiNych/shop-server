import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Attribute } from './attribute.entity';
import { AttributeService } from './attribute.service';
import { AttributeController } from './attribute.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Attribute])],
  controllers: [AttributeController],
  providers: [AttributeService],
  exports: [AttributeService],
})
export class AttributeModule {}
