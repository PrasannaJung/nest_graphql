import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { CreateUserInput } from './dto/create-user.dto';
import { LoginResponse } from './entity/auth.entity';
import { TokenService } from 'src/common/services/token.service';
import { UserDocument } from 'src/user/schema/user.schema';
import { LoginUserInput } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async signupUser(input: CreateUserInput): Promise<{ message: string }> {
    const user = await this.userService.findByEmail(input.email);

    if (user) {
      throw new ConflictException('User with the given email already exists');
    }

    await this.userService.register(input);
    return { message: 'User registered successfully' };
  }

  async loginUser(input: LoginUserInput): Promise<LoginResponse> {
    const user = await this.validateUser(input.email, input.password);

    if (!user.isActive) {
      throw new ForbiddenException("User's account is not activated");
    }

    const response = this.tokenService.generateTokens({
      sub: String(user._id),
      email: user.email,
      role: user.role,
    });

    return response;
  }

  async validateUser(email: string, password: string): Promise<UserDocument> {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new NotFoundException('User with the given email does not exist');
    }
    if (user.password !== password) {
      throw new UnauthorizedException(
        'Invalid credentials. Password did not match',
      );
    }

    return user;
  }
}
