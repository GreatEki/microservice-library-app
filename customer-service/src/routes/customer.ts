import { Router } from "express";
import * as CustomerController from "../controller/customer";

const router = Router();

router.route("/create").post(CustomerController.createCustomer);

export default router;
