import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthResponse } from './entity/auth.entity';
import { CreateUserInput } from './dto/create-user.dto';

@Resolver()
export class AuthResolver {
  constructor() {}

  @Mutation(() => AuthResponse)
  signUp(@Args('input') input: CreateUserInput) {}
}
