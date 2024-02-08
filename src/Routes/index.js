import testRouter from "./test.router";
import userRouter from "./user.router";
import customerRouter from "./customer.router";
import dbRouter from "./db.router";
import sessionRouter from "./session.router";
import registerRouter from "./register.router";

import recaptchaRouter from "./recaptcha.router";

export default function routes(app) {
  app.use("/users", userRouter);
  app.use("/customers", customerRouter);
  app.use("/test", testRouter);
  app.use("/bd", dbRouter);
  app.use("/", sessionRouter);
  app.use("/signUp", registerRouter);
  app.use("/api", recaptchaRouter);
}
