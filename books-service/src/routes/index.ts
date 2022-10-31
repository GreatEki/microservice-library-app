import BookRoutes from "./book";
import { Router } from "express";

const router = Router();

router.use("/book", BookRoutes);

export default router;
