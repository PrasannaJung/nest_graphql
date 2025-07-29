import { Injectable } from '@nestjs/common';
import { Post, PostDocument } from './schema/post.schema';
import { FilterQuery, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IPostRepository } from './interface/post-repository.interface';

@Injectable()
export class PostRepository implements IPostRepository {
  constructor(
    @InjectModel(Post.name)
    private readonly postModel: Model<PostDocument>,
  ) {}

  async findAll(): Promise<PostDocument[] | []> {
    const posts = await this.postModel.find();
    return posts;
  }

  async findById(id: string): Promise<PostDocument | null> {
    const post = await this.postModel.findById(id);
    return post;
  }

  async findOne(query: FilterQuery<Post>): Promise<PostDocument | null> {
    const post = await this.postModel.findOne(query);
    return post;
  }

  async create(data: Partial<Post>): Promise<PostDocument> {
    return await this.postModel.create(data);
  }

  update(id: string, data: Partial<Post>): Promise<PostDocument | null> {
    throw new Error('Method not implemented.');
  }

  deleteById(id: string): Promise<PostDocument | null> {
    throw new Error('Method not implemented.');
  }
}
