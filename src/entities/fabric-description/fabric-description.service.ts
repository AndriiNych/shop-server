import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FabricDescription } from './fabric-description.entity';
import { Repository } from 'typeorm';

type FabricDescriptionType = Partial<InstanceType<typeof FabricDescription>>;

@Injectable()
export class FabricDescriptionService {
  constructor(
    @InjectRepository(FabricDescription)
    private readonly fabricDescriptionRepository: Repository<FabricDescription>,
  ) {}

  public async getFabricDescription(
    conditions: FabricDescriptionType,
  ): Promise<FabricDescription[]> {
    return await this.fabricDescriptionRepository.find({ where: conditions });
  }
}
