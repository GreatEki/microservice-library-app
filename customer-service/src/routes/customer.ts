import { Router } from "express";
import * as CustomerController from "../controller/customer";

const router = Router();

router.route("/create").post(CustomerController.createCustomer);

router.route("/").get(CustomerController.getCustomers);

router
  .route("/:customerId")
  .get(CustomerController.getCustomer)
  .delete(CustomerController.deleteCustomer);

export default router;
