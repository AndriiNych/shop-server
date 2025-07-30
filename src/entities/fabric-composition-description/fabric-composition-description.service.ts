import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FabricCompositionDescription } from './fabric-composition-description.entity';
import { Repository } from 'typeorm';
import { InstanceChecker } from 'typeorm/browser';

type FabricCompositionDescriptionType = Partial<InstanceType<typeof FabricCompositionDescription>>;

@Injectable()
export class FabricCompositionDescriptionService {
  constructor(
    @InjectRepository(FabricCompositionDescription)
    private readonly fabricCompositionDescriptionRepository: Repository<FabricCompositionDescription>,
  ) {}

  public async getFabricCompositionDescription(
    conditions: FabricCompositionDescriptionType,
  ): Promise<FabricCompositionDescription[]> {
    return await this.fabricCompositionDescriptionRepository.find({ where: conditions });
  }
}
