import { Module } from '@nestjs/common';

import { ConfigModule } from './config.module';
import { ConfigModule as ConfigModuleRoot } from '@nestjs/config';
// import { TypeOrmModule } from './db/typeorm.module';

@Module({
  imports: [ConfigModuleRoot.forRoot(), ConfigModuleRoot.forRoot(), ConfigModule, ],
})

// TypeOrmModule
export class AppModule {}
