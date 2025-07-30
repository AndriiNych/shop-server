import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Color3Description } from './color-3-description.entity';
import { Color3DescriptionController } from './color-3-description.controller';
import { Color3DescriptionService } from './color-3-description.service';

@Module({
  imports: [TypeOrmModule.forFeature([Color3Description])],
  controllers: [Color3DescriptionController],
  providers: [Color3DescriptionService],
  exports: [Color3DescriptionService],
})
export class Color3DescriptionModule {}
