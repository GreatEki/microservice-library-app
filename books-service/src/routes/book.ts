import { Router } from "express";
import * as BookController from "../controllers/book";

const router = Router();

router.route("/add-book").post(BookController.createBook);

router.route("/").get(BookController.getAllBooks);

export default router;
