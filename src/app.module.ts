import { Module } from '@nestjs/common';

import { ConfigModule } from './config.module';
import { ConfigModule as ConfigModuleRoot } from '@nestjs/config';
import { MenuModule } from './entities/menu/menu.module';
// import { TypeOrmModule } from './db/typeorm.module';

@Module({
  imports: [ConfigModuleRoot.forRoot(), ConfigModuleRoot.forRoot(), ConfigModule, MenuModule],
})

// TypeOrmModule
export class AppModule {}
