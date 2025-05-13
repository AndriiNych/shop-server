import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductSpecial } from './product-special.entity';
import { ProductSpecialService } from './product-special.service';
import { ProductSpecialController } from './product-special.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductSpecial])],
  controllers: [ProductSpecialController],
  providers: [ProductSpecialService],
  exports: [ProductSpecialService],
})
export class ProductSpecialModule {}
