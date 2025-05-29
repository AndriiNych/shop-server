import { Module } from '@nestjs/common';

import { ConfigModule } from './config.module';
import { ConfigModule as ConfigModuleRoot } from '@nestjs/config';
import { NewSiteModule } from './entities/new-site/new-site.module';
import { TypeOrmModule } from './db/wrapper.typeorm.module';
import { UserModule } from './entities/user/user.module';

@Module({
  imports: [ConfigModuleRoot.forRoot(), ConfigModule, TypeOrmModule, NewSiteModule, UserModule],
})
export class AppModule {}
