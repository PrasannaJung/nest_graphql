import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginResponse, RegisteResponse } from './entity/auth.entity';
import { CreateUserInput } from './dto/create-user.dto';
import { LoginUserInput } from './dto/login-user.dto';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  login(@Args('input') input: LoginUserInput) {
    return this.authService.loginUser(input);
  }

  @Mutation(() => RegisteResponse)
  register(@Args('input') input: CreateUserInput) {
    return this.authService.signupUser(input);
  }
}
