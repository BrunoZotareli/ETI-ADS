import { Router } from "express";
import bookController from "./books/controllers/book.controller";

const routes = Router();

routes.post("/books", bookController.create);

routes.get("/books", bookController.findAll);

routes.get("/books/:id", bookController.findOne);

routes.delete("/books/:id",bookController.delete);

routes.put("/books/:id",bookController.update);

export { routes };
