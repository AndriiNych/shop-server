import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserApiBaseDto } from './dto/user.api.base.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }

  async createUser(email: string, hashedPassword: string): Promise<User> {
    const userData: UserApiBaseDto = {
      email,
      password: hashedPassword,
      name: '',
      role: ['user'],
    };

    const user = this.userRepository.create(userData);

    return this.userRepository.save(user);
  }
}
