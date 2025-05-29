import { Expose } from 'class-transformer';

export class UserResponseBaseDto {
  @Expose()
  id: number;

  @Expose()
  email: string;

  @Expose()
  password: string;

  @Expose()
  name: string;

  @Expose()
  role: string[];
}
