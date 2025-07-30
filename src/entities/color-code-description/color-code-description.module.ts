import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorCodeDescription } from './color-code-description.entity';
import { ColorCodeDescriptionControllers } from './color-code-description.controller';
import { ColorCodeDescriptionService } from './color-code-description.service';

@Module({
  imports: [TypeOrmModule.forFeature([ColorCodeDescription])],
  controllers: [ColorCodeDescriptionControllers],
  providers: [ColorCodeDescriptionService],
  exports: [ColorCodeDescriptionService],
})
export class ColorCodeDescriptionModule {}
