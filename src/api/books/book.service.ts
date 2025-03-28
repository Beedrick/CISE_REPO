import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './book.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './create-book.dto';

@Injectable()
export class BookService {

    constructor(@InjectModel(Book.name) private bookModel: Model<Book>) { 
        
    }

    test(): string {
        return 'book route testing';
    }


    async findAll(): Promise<Book[]> {
        return await this.bookModel.find().exec();
    }


    async findOne(id: string): Promise<Book> {
        const bookFound = await this.bookModel.findById(id).exec();

        if (!bookFound) {
            throw new NotFoundException('No book by that id found!');
        }

        return bookFound;
    }

    async create(createBookDto: CreateBookDto) {
        return await this.bookModel.create(createBookDto);
    }

    async update(id: string, createBookDto: CreateBookDto) {
        return await this.bookModel.findByIdAndUpdate(id, createBookDto).exec();
    }

    async delete(id: string) {
        const deletedBook = await this.bookModel.findByIdAndDelete(id).exec();
        return deletedBook;
    }

}