export const errorMiddleware = (err, req, res, next) => {
  err.message ||= "Internal Server Error";
  err.statusCode ||= 500;

  //when length of _id is less or more
  if (err.name === "CastError") err.message = "Invalid ID";

  //   console.log("In error middleware!");

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export const TryCatch = (func) => {
  return (req, res, next) => {
    return Promise.resolve(func(req, res, next)).catch(next);
  };
};
