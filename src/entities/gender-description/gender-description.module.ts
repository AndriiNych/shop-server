import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenderDescription } from './gender-description.entity';
import { GenderDescriptionController } from './gender-description.controller';
import { GenderDescriptionService } from './gender-description.service';

@Module({
  imports: [TypeOrmModule.forFeature([GenderDescription])],
  controllers: [GenderDescriptionController],
  providers: [GenderDescriptionService],
  exports: [GenderDescriptionService],
})
export class GenderDescriptionModule {}
