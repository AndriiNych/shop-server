import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MenuPath } from './menu-path.entity';
import { MenuPathService } from './menu-path.service';
import { MenuPathController } from './menu-path.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MenuPath])],
  controllers: [MenuPathController],
  providers: [MenuPathService],
  exports: [MenuPathService],
})
export class MenuPathModule {}
