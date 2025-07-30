import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelItemSize } from './model-item-size.entity';
import { ModelItemSizeController } from './model-item-size.controller';
import { ModelItemSizeService } from './model-item-size.service';

@Module({
  imports: [TypeOrmModule.forFeature([ModelItemSize])],
  controllers: [ModelItemSizeController],
  providers: [ModelItemSizeService],
  exports: [ModelItemSizeService],
})
export class ModuleItemSizeModule {}
