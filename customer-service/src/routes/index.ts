import { Router } from "express";
import CustomerRoutes from "./customer";

const router = Router();

router.use("/customer", CustomerRoutes);

export default router;
