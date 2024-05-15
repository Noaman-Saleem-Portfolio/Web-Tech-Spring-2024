import { TryCatch } from "../middlewares/error.js";
import { User } from "../models/user-model.js";
import ErrorHandler from "../utils/error-class.js";

const generateAccessAndRefereshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error(
      "Something went wrong while generating referesh and access token"
    );
  }
};

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
    createdUser,
  });
});

//////////////////////////////
//// Login
//////////////////////////////
export const loginUser = TryCatch(async (req, res, next) => {
  // steps to follow
  // get email and password from req.body
  // check if username or email missing
  // find the user send error if user does not exist
  // password check
  // generate access and referesh token
  // send cookie

  // 1. get email and password from req.body
  const { email, password } = req.body;
  // console.log(email, password);

  // 2. check if username or email missing
  if (!email || !password) {
    return next(
      new ErrorHandler("Both Email and password must be entered to login", 400)
    );
  }

  // 3. find the user send error if user does not exist
  const user = await User.findOne({ email });
  if (!user) {
    return next(
      new ErrorHandler("No account exists with the provided email", 404)
    );
  }

  // 4. compare password
  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  // 5. generate access and referesh token
  const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json({
      success: true,
      message: "User logged In Successfully",
      user: loggedInUser,
    });
});
