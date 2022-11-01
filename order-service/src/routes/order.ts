import { Router } from "express";
import * as OrderController from "../controller/order";

const router = Router();

router.route("/create").post(OrderController.createOrder);

router.route("/").get(OrderController.getOrders);

export default router;
