import { UserResponseBaseDto } from './user.response.base.dto';
import { OmitType } from '@nestjs/swagger';

export class UserResponseDto extends OmitType(UserResponseBaseDto, ['password']) {}
