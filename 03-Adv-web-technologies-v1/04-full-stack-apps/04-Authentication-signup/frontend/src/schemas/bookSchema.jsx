import * as yup from "yup";

const bookSchema = yup.object().shape({
  title: yup.string().max(100).required("Title is required"),
  price: yup.number().required("Price is required"),
  description: yup.string().max(1000),
});

export default bookSchema;
