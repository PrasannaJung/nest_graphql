import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostEntity } from './entities/post.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostService } from './post.service';
import { PostDocument } from './schema/post.schema';
import { CreatePostInput } from './dto/create-post.dto';

@Resolver(() => PostEntity)
export class PostsResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => [PostEntity])
  async posts(): Promise<PostDocument[]> {
    const allPosts = await this.postService.findAllPosts();
    return allPosts;
  }

  @Mutation(() => PostEntity)
  async createPost(
    @Args('input') input: CreatePostInput,
  ): Promise<PostDocument> {
    return await this.postService.createPost(input);
  }
}
