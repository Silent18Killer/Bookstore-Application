import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from './book.schema';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(bookData: any) {
    const book = new this.bookModel(bookData);
    return book.save();
  }

  async findAll(query: any) {
    const { author, category, rating, title, sortBy, order, page = 1, limit = 10 } = query;
    const filter: any = {};
    if (author) filter.author = author;
    if (category) filter.category = category;
    if (rating) filter.rating = Number(rating);
    if (title) filter.title = { $regex: title, $options: 'i' };

    const sort: any = {};
    if (sortBy) sort[sortBy] = order === 'desc' ? -1 : 1;

    return this.bookModel.find(filter)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(Number(limit));
  }

  async findById(id: string) {
    return this.bookModel.findById(id);
  }

  async update(id: string, updateData: any) {
    return this.bookModel.findByIdAndUpdate(id, updateData, { new: true });
  }

  async delete(id: string) {
    return this.bookModel.findByIdAndDelete(id);
  }
}