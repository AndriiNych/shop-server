import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhotoUpdate } from './photo-update.entity';

@Injectable()
export class PhotoUpdateService {
  constructor(
    @InjectRepository(PhotoUpdate)
    private readonly photoUpdateRepository: Repository<PhotoUpdate>,
  ) {}
}
