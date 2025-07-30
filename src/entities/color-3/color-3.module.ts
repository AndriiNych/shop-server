import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Color3Service } from './color-3.service';
import { Color3Controller } from './color-3.controller';
import { Color3 } from './color-3.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Color3])],
  controllers: [Color3Controller],
  providers: [Color3Service],
  exports: [Color3Service],
})
export class Color3Module {}
