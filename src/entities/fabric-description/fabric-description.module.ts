import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FabricDescription } from './fabric-description.entity';
import { FabricDescriptionController } from './fabric-description.controller';
import { FabricDescriptionService } from './fabric-description.service';

@Module({
  imports: [TypeOrmModule.forFeature([FabricDescription])],
  controllers: [FabricDescriptionController],
  providers: [FabricDescriptionService],
  exports: [FabricDescriptionService],
})
export class FabricDescriptionModule {}
