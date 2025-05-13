import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MenuDescription } from './menu-description.entity';
import { MenuDescriptionService } from './menu-description.service';
import { MenuDescriptionController } from './menu-description.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MenuDescription])],
  controllers: [MenuDescriptionController],
  providers: [MenuDescriptionService],
  exports: [MenuDescriptionService],
})
export class MenuDescriptionModule {}
