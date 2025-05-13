import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductAttributes } from './product-attributes.entity';
import { ProductAttributesService } from './product-attributes.service';
import { ProductAttributesController } from './product-attributes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductAttributes])],
  controllers: [ProductAttributesController],
  providers: [ProductAttributesService],
  exports: [ProductAttributesService],
})
export class ProductAttributesModule {}
