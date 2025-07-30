import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoUpdate } from './photo-update.entity';
import { PhotoUpdateService } from './photo-update.service';
import { PhotoUpdateController } from './photo-update.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoUpdate])],
  providers: [PhotoUpdateService],
  controllers: [PhotoUpdateController],
  exports: [PhotoUpdateService],
})
export class PhotoUpdateModule {}
