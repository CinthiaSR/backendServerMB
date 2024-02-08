import jwtServices from "../Middlewares/jwt.services";
import User from "../Models/user.model";
export class UserController {
  // get all user
  getAllUser = async (req, res, next) => {
    try {
      const {myTokenName} = req.cookies;
      // console.log("token extraido controllers", myTokenName);
      const {email} = await jwtServices.verify(myTokenName);
      console.log("USER email", email);
      const infoUser = await User.findOne({email});
      if (!infoUser) {
        console.log("sin permisos");
        res.status(404).json({msm: "sin permisos"});
      } else {
        console.log("muestra informacion");
        // res.status(201).json({msm: "Muestra informacion"});
        const getAll = await User.find({});
        res.status(201).json({msm: "Get all user", getAll});
        console.log(getAll);
      }
    } catch (error) {
      next(error);
      console.log(error);
    }
  };

  //   get only one user
  getByUser = async (req, res, next) => {
    try {
      const {idUser} = req.params;
      const infoUser = await User.findById(idUser);
      if (!infoUser) {
        console.log("User not found");
        res.status(404).json({msm: "User not found"});
      } else {
        res.status(201).json({msm: "Get ok", infoUser});
      }
    } catch (error) {
      next(error);
      console.log(error);
    }
  };

  //   create user
  createUser = async (req, res, next) => {
    try {
      const {name, lastName, role, email, password} = req.body;
      const newUser = new User({
        name,
        lastName,
        role,
        // orders,
        email,
        password,
      });
      await newUser.save();
      res.status(201).json({message: "created user ok", newUser});
    } catch (error) {
      next(error);
      console.log(error);
    }
  };

  //   Update user

  updateUser = async (req, res, next) => {
    try {
      const {idUser} = req.params;
      const bodyParams = {...req.body};
      const userUpdated = await User.findByIdAndUpdate(idUser, bodyParams, {
        new: true,
      });
      if (!userUpdated) {
        return res.status(404).json({msm: "User not updated"});
      } else {
        res.status(201).json({msm: "Update Complete", userUpdated});
      }
    } catch (error) {
      next(error);
      console.log(error);
    }
  };

  //   delete only user
  deleteUser = async (req, res, next) => {
    try {
      const {idUser} = req.params;
      const userDeleted = await User.findByIdAndDelete(idUser);
      if (!userDeleted) {
        return res.status(404).json({msm: "User not delete"});
      } else {
        res.status(201).json({msm: "User Deleted", userDeleted});
      }
    } catch (error) {
      next(error);
    }
  };
}
export default new UserController();
