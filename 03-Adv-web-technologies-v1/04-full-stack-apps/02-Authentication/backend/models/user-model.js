import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

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

//Middleware
//Encrypt password before saving data in DB
userSchema.pre("save", async function (next) {
  // Incase of updating user data we need to avoid encrypt password again and again
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export const User = mongoose.model("user", userSchema);
