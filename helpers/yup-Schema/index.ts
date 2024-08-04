import { array, object, string } from "yup";
export const signupFormValidateSchema = object({
  username: string()
    .required("username must be provided")
    .min(5, "username must be at least 5 characters")
    .trim(),
  email: string().email().required("email must be provided"),
  password: string()
    .min(6, "password must be at least 6 characters")
    .required("please Enter your Password")
    .trim(),
});

export const signinFormValidateSchema = object({
  email: string().email().required("email must be provided"),
  password: string()
    .min(6, "password must be at least 6 characters")
    .required("please Enter your Password")
    .trim(),
});

export const checkoutFormSchema = object({
  username: string().required(" username must be required"),

  contact: string().required("phone or email must be required"),
  address: string().required("delivery address must be required"),
});
