import * as express from "express";
import SessionController from "../Controllers/session.controller";

export default express.Router().post("/login", SessionController.login);
