import { Injectable } from '@nestjs/common';
import { IUserRepository } from './interface/user-repository.interface';
import { FilterQuery, Model } from 'mongoose';
import { UserDocument, User } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async findByEmail(email: string): Promise<UserDocument | null> {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  findAll(): Promise<[] | UserDocument[]> {
    throw new Error('Method not implemented.');
  }

  async findById(id: string): Promise<UserDocument | null> {
    const user = await this.userModel.findById(id);
    return user;
  }

  findOne(query: FilterQuery<User>): Promise<UserDocument | null> {
    throw new Error('Method not implemented.');
  }

  async create(data: Partial<User>): Promise<UserDocument> {
    const createdUser = await this.userModel.create(data);
    return createdUser;
  }

  update(id: string, data: Partial<User>): Promise<UserDocument | null> {
    throw new Error('Method not implemented.');
  }

  deleteById(id: string): Promise<UserDocument | null> {
    throw new Error('Method not implemented.');
  }
}
