import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserDocument } from './schema/user.schema';
import { CreateUserInput } from 'src/auth/dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findByEmail(email: string): Promise<UserDocument | null> {
    const user = await this.userRepository.findByEmail(email);
    return user;
  }

  async register(input: CreateUserInput): Promise<UserDocument> {
    return this.userRepository.create(input);
  }
}
