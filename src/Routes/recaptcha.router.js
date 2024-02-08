import * as express from "express";
import Recaptcha from "../Controllers/recaptcha.controller";

export default express.Router().post("/recaptcha", Recaptcha.getRecaptcha);
