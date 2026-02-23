import bookModel from "../schemas/book.schema";
import { BookType } from "../types/book.type";

class BookService {
  async create(book: BookType) {
    const createdBook = await bookModel.create(book);
    return createdBook;
  }

  async findAll() {
    const books = await bookModel.find();
    return books;
  }

  async findOne(id: string) {
    const book = await bookModel.findById(id);
    return book;
  }

  async delete(id: string) {
    await bookModel.findByIdAndDelete(id);
  }

  async update(id: string, book: BookType) {
    const updatedBook = await bookModel.findByIdAndUpdate(id, {
      title: book.title,
      name: book.author,
      year: book.year,
      ISBN: book.ISBN,
      price: book.price
    }, { new: true })
  };
}

export default new BookService();
