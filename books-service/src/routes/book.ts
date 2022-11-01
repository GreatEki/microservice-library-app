import { Router } from "express";
import * as BookController from "../controllers/book";

const router = Router();

router.route("/add-book").post(BookController.createBook);

router.route("/").get(BookController.getAllBooks);

router
  .route("/:bookId")
  .get(BookController.getBook)
  .delete(BookController.deleteBook);

export default router;
