import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  @MinLength(7, { message: 'Password must be at least 7 characters' })
  password: string;

  @Field()
  @IsString()
  username: string;
}
