import { BaseRepository } from 'src/common/interface/base-repository.interface';
import { Post, PostDocument } from '../schema/post.schema';

export interface IPostRepository extends BaseRepository<Post, PostDocument> {}
