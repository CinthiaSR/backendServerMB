import * as express from "express";
import userController from "../Controllers/user.controller";
import AuthMiddleware from "../Middlewares/auth";
export default express
  .Router()
  // .get("/", userController.getAllUser)
  .get("/", AuthMiddleware.auth, userController.getAllUser)
  .post("/", userController.createUser)
  .get("/:idUser", AuthMiddleware.auth, userController.getByUser)
  .patch("/:idUser", userController.updateUser)
  .delete("/:idUser", userController.deleteUser);
