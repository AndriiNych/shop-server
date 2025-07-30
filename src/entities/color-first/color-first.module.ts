import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorFirst } from './color-first.entity';
import { Module } from '@nestjs/common';
import { ColorFirstService } from './color-first.service';
import { ColorFirstController } from './color-first.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ColorFirst])],
  controllers: [ColorFirstController],
  providers: [ColorFirstService],
  exports: [ColorFirstService],
})
export class ColorFirstModule {}
