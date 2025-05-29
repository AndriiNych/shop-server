import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';
import { UserResponseDto } from './dto/user.response.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const { password: _, ...result } = user;
    return result;
  }

  async login(email: string, password: string): Promise<{ token: string; user: any }> {
    const user = await this.validateUser(email, password);

    const newUser = plainToInstance(UserResponseDto, user, {
      excludeExtraneousValues: true,
    });

    const token = await this.createToken(newUser);

    return {
      token,
      user: newUser,
    };
  }

  async register(
    email: string,
    password: string,
  ): Promise<{ token: string; user: UserResponseDto }> {
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userRepository.createUser(email, hashedPassword);

    const newUser = plainToInstance(UserResponseDto, user, {
      excludeExtraneousValues: true,
    });

    const token = await this.createToken(newUser);

    return {
      token,
      user: newUser,
    };
  }

  private async createToken(user: UserResponseDto): Promise<string> {
    const payload = { sub: user.id, email: user.email, role: user.role };

    return await this.jwtService.signAsync(payload);
  }
}
