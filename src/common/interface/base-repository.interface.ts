import { FilterQuery } from 'mongoose';

export interface BaseRepository<T, DocType> {
  findAll(): Promise<DocType | []>;
  findById(id: string): Promise<DocType | null>;
  findOne(query: FilterQuery<T>): Promise<DocType | null>;
  create(data: Partial<T>): Promise<DocType | null>;
}
