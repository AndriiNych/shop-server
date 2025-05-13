import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductDescription } from './product-description.entity';
import { ProductDescriptionService } from './product-description.service';
import { ProductDescriptionController } from './product-description.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductDescription])],
  controllers: [ProductDescriptionController],
  providers: [ProductDescriptionService],
  exports: [ProductDescriptionService],
})
export class ProductDescriptionModule {}
