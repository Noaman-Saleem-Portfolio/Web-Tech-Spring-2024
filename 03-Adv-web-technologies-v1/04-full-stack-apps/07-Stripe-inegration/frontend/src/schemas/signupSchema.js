import * as yup from "yup";

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;

const erroMessage = "use lowercase, uppercase and digits";

const signupSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(8)
    .max(25)
    .matches(passwordPattern, { message: erroMessage })
    .required(),
  name: yup.string().max(100).required("name is required"),
});

export default signupSchema;
