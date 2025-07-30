import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorFirstDescription } from './color-first-description.entity';
import { ColorFirstDescriptionController } from './color-first-description.controller';
import { ColorFirstDescriptionService } from './color-first-description.service';

@Module({
  imports: [TypeOrmModule.forFeature([ColorFirstDescription])],
  controllers: [ColorFirstDescriptionController],
  providers: [ColorFirstDescriptionService],
  exports: [ColorFirstDescriptionService],
})
export class ColorFirstDescriptionModule {}
