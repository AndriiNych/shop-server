import { Module } from '@nestjs/common';
import { NewSiteController } from './new-site.controller';
import { NewSiteService } from './new-site.service';

@Module({
  controllers: [NewSiteController],
  providers: [NewSiteService],
})
export class NewSiteModule {}
