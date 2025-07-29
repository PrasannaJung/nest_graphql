import { Injectable } from '@nestjs/common';
import { Post, PostDocument } from './schema/post.schema';
import { CreatePostInput } from './dto/create-post.dto';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  async findAllPosts(): Promise<PostDocument[]> {
    const posts = await this.postRepository.findAll();
    return posts;
  }

  async createPost(data: CreatePostInput): Promise<PostDocument> {
    return await this.postRepository.create(data);
  }
}
