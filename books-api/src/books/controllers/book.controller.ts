import { Request, Response } from "express";
import bookService from "../services/book.service";

class BookController {
  async create(req: Request, res: Response) {
    const createdBook = await bookService.create(req.body);
    res.status(201);
    return res.json(createdBook);
  }

  async findAll(req: Request, res: Response) {
    const books = await bookService.findAll();
    res.status(200);
    return res.json(books);
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    res.status(200);
    const book = await bookService.findOne(id);
    return res.json(book);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await bookService.delete(id);
    res.status(204);
    return res.send();
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const updatedBook = await bookService.update(id, req.body);
    res.status(214);
    return res.json(updatedBook);
  }

}
export default new BookController();
