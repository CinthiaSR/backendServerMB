import jwtServices from "./jwt.services";
import {AuthErrorHandler} from "./error.Handler";

export class AuthMiddleware {
  auth = async (req, res, next) => {
    // get authorization header with cookies
    const {myTokenName} = req.cookies;
    // console.log("token extraido de las cookies", myTokenName);
    if (!myTokenName) {
      return res.status(401).json({
        message: "Unauthorized, check your authentication token",
      });
    }
    try {
      const tempResultToken = await jwtServices.verify(myTokenName);
      console.log("Resultado de la verificacion del token: ", tempResultToken);
      const {_id, role} = tempResultToken;
      const user = {_id, role};
      req.user = user;
      next();
    } catch (error) {
      console.log(error);
      return next(error);
    }
  };
}
export default new AuthMiddleware();
