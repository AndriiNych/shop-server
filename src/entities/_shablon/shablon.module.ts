import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Shablon } from './shablon.entity';
import { ShablonService } from './shablon.service';
import { ShablonController } from './shablon.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Shablon])],
  controllers: [ShablonController],
  providers: [ShablonService],
  exports: [ShablonService],
})
export class CustomerModule {}
