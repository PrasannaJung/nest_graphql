import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class PostEntity {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  content?: string;

  // @Field()
  // createdAt: Date;

  //   @Field(() => Author)
  //   author: Author;
}
