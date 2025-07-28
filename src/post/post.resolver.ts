import { Query, Resolver } from '@nestjs/graphql';
import { Post } from './entities/post.entity';
import { PostDocument, Post as DbPost } from './schema/post.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Resolver(() => Post)
export class PostsResolver {
  constructor(
    @InjectModel(DbPost.name)
    private readonly postModel: Model<PostDocument>,
  ) {}

  @Query(() => [Post])
  async posts(): Promise<PostDocument[]> {
    const allPosts = await this.postModel.find();
    return allPosts;
  }
}
