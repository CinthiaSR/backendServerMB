import Express from "express";
import cookieParser from "cookie-parser";
import * as http from "http";
import * as bodyParser from "body-parser";
import cors from "cors";
import errorHandler from "../Middlewares/error.Handler";

const app = new Express();

export default class ExpressServer {
  constructor() {
    app.use(cors());
    app.use(Express.json());
    app.use(cookieParser());
    app.use(bodyParser.json({limit: "20Mb" || "100kb"}));
  }
  router(routes) {
    routes(app);
    app.use(errorHandler);
    return this;
  }

  database(initDatabase) {
    initDatabase();
    return this;
  }

  listen(networkPort = process.env.PORT) {
    console.log(`Listening on port http://localhost:${networkPort}`);
    http.createServer(app).listen(networkPort);
    return app;
  }
}
