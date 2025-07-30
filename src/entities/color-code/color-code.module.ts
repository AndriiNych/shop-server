import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorCode } from './color-code.entity';
import { ColorCodeController } from './color-code.controller';
import { ColorCodeService } from './color-code.service';
import { ColorCodeDescriptionModule } from '../color-code-description/color-code-description.module';

@Module({
  imports: [TypeOrmModule.forFeature([ColorCode]), ColorCodeDescriptionModule],
  controllers: [ColorCodeController],
  providers: [ColorCodeService],
  exports: [ColorCodeService],
})
export class ColorCodeModule {}
