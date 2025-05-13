import { Module } from '@nestjs/common';
import { TypeOrmModule as MySqlTypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getBooleanValueFromEnv } from '@src/util/env.boolean';

export const configMySqlTypeOrm: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.WRAP_MYSQL_HOST,
  port: Number(process.env.WRAP_MYSQL_PORT),
  username: process.env.WRAP_MYSQL_USERNAME,
  password: process.env.WRAP_MYSQL_PASSWORD,
  database: process.env.WRAP_MYSQL_DATABASE,
  entities: ['dist/entities' + '/**/*.entity.js'],
  synchronize: getBooleanValueFromEnv(process.env.WRAP_SINCHRONIZE),
};
@Module({
  imports: [MySqlTypeOrmModule.forRoot(configMySqlTypeOrm)],
})
export class TypeOrmModule {}
