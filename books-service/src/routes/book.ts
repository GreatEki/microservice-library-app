import { Router } from "express";
import * as BookController from "../controllers/book";

const router = Router();

router.route("/add-book").post(BookController.createBook);

export default router;
