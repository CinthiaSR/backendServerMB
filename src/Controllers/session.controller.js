import bcrypt from "bcrypt";
import jwtServices from "../Middlewares/jwt.services";
import {serialize} from "cookie";
import User from "../Models/user.model";

export class SessionController {
  login = async (req, res, next) => {
    console.log("Iniciando login....");
    console.log(req.body);
    try {
      const {email, role, password} = req.body;
      const user = await User.findOne({email});
      if (!user) {
        return res.status(404).json({msm: "User not found"});
      } else {
        console.log("User found exist....", user);
        const accessToken = jwtServices.sign({
          email,
          role,
          password,
        });

        res.cookie("AccessToken", accessToken, {
          httpOnly: true,
          secure: true,
          sameSite: "lax",
          maxAge: 10000,
          path: "/",
        });

        const serializedWithCookie = serialize("myTokenName", accessToken, {
          httpOnly: true,
          secure: true,
          sameSite: "lax",
          maxAge: 10000,
          path: "/",
        });

        res.setHeader("Set-Cookie", serializedWithCookie);
        return res.json("Token enviado con exito");
        // res.status(201).json({tokenID});
        // res.send("token enviado");
      }
    } catch (error) {
      next(error);
    }
  };
}

export default new SessionController();
