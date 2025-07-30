import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FabricCompositionDescription } from './fabric-composition-description.entity';
import { FabricCompositionDescriptionController } from './fabric-composition-description.controller';
import { FabricCompositionDescriptionService } from './fabric-composition-description.service';

@Module({
  imports: [TypeOrmModule.forFeature([FabricCompositionDescription])],
  controllers: [FabricCompositionDescriptionController],
  providers: [FabricCompositionDescriptionService],
  exports: [FabricCompositionDescriptionService],
})
export class FabricCompositionDescriptionModule {}
