import * as yup from "yup";

const bookSchema = yup.object().shape({
  title: yup.string().max(100).required("Title is required"),
  description: yup.string().max(1000),
  price: yup.number().required("Price is required"),
  photo: yup.string(),
});

export default bookSchema;
