import { TryCatch } from "../middlewares/error.js";
import { User } from "../models/user-model.js";
import ErrorHandler from "../utils/error-class.js";

//////////////////////////////
//// Create New User Account
//////////////////////////////
export const registerUser = TryCatch(async (req, res, next) => {
  // Steps to follow inorder to create new user
  // get user details from frontend
  // validation - not empty
  // check if user already exists: username, email
  // create user object - create entry in db
  // remove password and refresh token field from response
  // check for user creation
  // return res

  //   1. get user details from frontend
  const { name, email, password } = req.body;

  //   2. validation - not empty
  if (!name || !email || !password) {
    return next(
      new ErrorHandler("Name, Email and password are required.", 400)
    );
  }

  //   3. check if user already exists: username, email
  const emailExists = await User.findOne({ email });

  if (emailExists) {
    return next(new ErrorHandler("The provided Email already exists", 400));
  }

  //   4. create user object - create entry in db
  const user = await User.create({
    name,
    email,
    password,
  });

  //  5. remove password and refresh token field from response
  //confirmation
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  //  6. check for user creation
  if (!createdUser) {
    return next(
      new ErrorHandler("Something went wrong while registering the user", 500)
    );
  }

  // 7. return response
  res.status(201).json({
    success: true,
    message: "User registered succesfully",
  });
});
