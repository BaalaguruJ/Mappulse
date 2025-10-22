import * as Yup from "yup";

export const RegisterSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username too long")
    .required("Username is required"),

  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .required("Mobile number is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export interface RegisterFormValues {
  username: string;
  mobile: string;
  password: string;
  confirmPassword: string;
}

export const initialValues: RegisterFormValues = {
    username: "",
    mobile: "",
    password: "",
    confirmPassword: "",
};
