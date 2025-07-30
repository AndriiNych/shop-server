import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemTypeDescription } from './item-type-description.entity';
import { ItemTypeDescriptionController } from './item-type-description.controller';
import { ItemTypeDescriptionService } from './item-type-description.service';

@Module({
  imports: [TypeOrmModule.forFeature([ItemTypeDescription])],
  controllers: [ItemTypeDescriptionController],
  providers: [ItemTypeDescriptionService],
  exports: [ItemTypeDescriptionService],
})
export class ItemTypeDescriptionModule {}
