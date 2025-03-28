import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { DB_URI } from './config';
import { BookModule } from './api/books/book.module';
import { Book } from './api/books/book.schema';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    MongooseModule.forRoot(DB_URI),
    BookModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
