import { FIELDS_LENGTH } from '@src/db/const-fields';
import { IsString, IsEmail, MaxLength, IsOptional } from 'class-validator';

export class UserApiBaseDto {
  @IsEmail()
  @MaxLength(FIELDS_LENGTH.VARCHAR.SHORT)
  @IsString()
  email: string;

  @MaxLength(FIELDS_LENGTH.VARCHAR.SHORT)
  @IsString()
  password: string;

  @MaxLength(FIELDS_LENGTH.VARCHAR.BASE)
  @IsString()
  @IsOptional()
  name?: string;

  @MaxLength(FIELDS_LENGTH.VARCHAR.BASE)
  @IsString()
  role: string[];
}
