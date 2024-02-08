import * as express from "express";
import testController from "../Controllers/test.controller";
export default express.Router().get("/", testController.getText);
