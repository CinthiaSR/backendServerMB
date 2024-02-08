import * as express from "express";
import blindController from "../Controllers/blind.controller";
export default express
  .Router()
  .get("/", blindController.getAllBlinds)
  .get("/:idBlind", blindController.getByBlind)
  .post("/", blindController.createBlind)
  .patch("/:idBlind", blindController.updateBlind)
  .delete("/:idBlind", blindController.deleteBlind);
