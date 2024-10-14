import * as Yup from "yup";

const signupSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(3, "Username must contain at least 3 characters")
    .max(20, "Username must contain at most 20 characters")
    .required("Username must contain at least 3 characters"),
  email: Yup.string()
    .trim()
    .email("Please enter a valid email")
    .required("Please enter a valid email"),
  password: Yup.string()
    .min(6, "Password must contain at least 6 characters")
    .required("Password must contain at least 6 characters"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must be same"
  ),
});

const signinSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Please enter a valid email")
    .required("Please enter a valid email"),
  password: Yup.string()
    .min(6, "Password must contain at least 6 characters")
    .required("Password must contain at least 6 characters"),
});

const productSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .min(5, "Title must contain at least 5 characters")
    .required("Title must contain at least 5 characters"),
  description: Yup.string().trim().required("Description is required"),
  price: Yup.number()
    .positive("Price must be greater then 0")
    .required("Price must be greater then 0"),
  category: Yup.string().required("Please select a valid category"),
  image: Yup.mixed().required("Image is required"),
});

export { signupSchema, signinSchema, productSchema };
