import * as Yup from "yup";

//form validation schemas

export const signupSchema = Yup.object({
  name: Yup.string().min(3).max(30).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long"
    )
    .required("Password is required"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/,
    "Invalid password!"         //no need for displaying whole error message while login
  ).required("Password is required"),
});
