import { Router } from "express";
import OrderRoutes from "./order";
const router = Router();

router.use("/order", OrderRoutes);

export default router;
