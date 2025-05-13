import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductStickers } from './product-stikers.entity';
import { ProductStickersService } from './product-stikers.service';
import { ProductStickersController } from './product-stikers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductStickers])],
  controllers: [ProductStickersController],
  providers: [ProductStickersService],
  exports: [ProductStickersService],
})
export class ProductStickersModule {}
