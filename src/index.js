import "dotenv/config";
import {connectToDataBase} from "./Helpers/database";
// import {conexion} from "./Helpers/database";
import ExpressServer from "./Helpers/server";
import routes from "./Routes";
export default new ExpressServer()
  .router(routes)
  .database(connectToDataBase)
  .listen(process.env.PORT);
