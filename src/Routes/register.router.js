import * as express from "express";
import RegisterAccount from "../Controllers/register.controller";

export default express.Router().post("/", RegisterAccount.createAccount);
