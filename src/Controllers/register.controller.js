import bcrypt from "bcrypt";
import User from "../Models/user.model";
import jwt from "jsonwebtoken";
import jwtServices from "../Middlewares/jwt.services";

export class RegisterAccount {
  createAccount = async (req, res, next) => {
    try {
      const {email, password, role} = req.body || "";
      const hashedPassword = await bcrypt.hash(password, 10);
      const emailUser = await User.findOne({email});

      if (emailUser) {
        return res.status(400).json({msm: "Email already exists"});
      } else {
        const registerUser = new User({
          email,
          password,
          role,
          password: hashedPassword,
        });
        await registerUser.save();
        const accessToken = await jwtServices.sign({
          _id: registerUser._id,
          role: registerUser.role,
          email: registerUser.email,
        });
        await RefreshToken.create({token: accessToken});
        res.status(201).json({msm: "Account created", accessToken});
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

export default new RegisterAccount();
