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

export { signupSchema, signinSchema };
