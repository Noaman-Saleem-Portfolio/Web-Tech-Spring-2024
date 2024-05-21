import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Please enter Name"],
    },

    email: {
      type: String,
      unique: [true, "Email already Exist"],
      required: [true, "Please enter Email"],
      validate: validator.default.isEmail,
    },

    password: {
      type: String,
      required: [true, "Please enter Email"],
      minLength: [8, "Password should be greater than 8 characters"],
      // select: false,
    },
    role: {
      type: String,
      default: "user",
    },
    refreshToken: {
      type: String,
      default: null,
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  }
);

// Middleware
// Encrypt password before saving data in DB
userSchema.pre("save", async function (next) {
  // Incase of updating user data we need to avoid encrypt password again and again
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare Password
userSchema.methods.isPasswordCorrect = async function (password) {
  // password must be a string
  return await bcrypt.compare(password, this.password);
};

//Generate Access Token
userSchema.methods.generateAccessToken = function () {
  // console.log(process.env.ACCESS_TOKEN_SECRET);
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.name,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

//Generate Refresh Token
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("user", userSchema);
