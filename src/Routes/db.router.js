import * as express from "express";
import dbController from "../Controllers/db.controller";
export default express.Router().get("/", dbController.getAll);
