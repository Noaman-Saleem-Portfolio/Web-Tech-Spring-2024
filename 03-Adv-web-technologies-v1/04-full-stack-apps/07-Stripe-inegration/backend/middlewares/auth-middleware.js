import { User } from "../models/user-model.js";
import ErrorHandler from "../utils/error-class.js";
import { TryCatch } from "./error.js";
import jwt from "jsonwebtoken";

export const verifyJWT = TryCatch(async (req, res, next) => {
  try {
    // console.log(req.cookies);
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return next(new ErrorHandler("Unauthorized request", 401));
    }

    //if JWT do not verify this token then it will automatically throw an Error and execution will go directly to the catch block
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      return next(new ErrorHandler("Invalid Access Token", 401));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(new ErrorHandler("Invalid access token", 401));
  }
});
