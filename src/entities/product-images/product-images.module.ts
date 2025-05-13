import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductImages } from './product-images.entity';
import { ProductImagesService } from './product-images.service';
import { ProductImagesController } from './product-images.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductImages])],
  controllers: [ProductImagesController],
  providers: [ProductImagesService],
  exports: [ProductImagesService],
})
export class ProductImagesModule {}
