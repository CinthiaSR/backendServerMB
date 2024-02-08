import * as express from "express";
import customerController from "../Controllers/customer.controller";
export default express
  .Router()
  .get("/", customerController.getAllCustomers)
  .post("/", customerController.createCustomer)
  .get("/:idCustomer", customerController.getByCustomer)
  .patch("/:idCustomer", customerController.updateCustomer)
  .delete("/:idCustomer", customerController.deleteCustomer);
