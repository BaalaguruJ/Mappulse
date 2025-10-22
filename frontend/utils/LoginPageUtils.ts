import * as Yup from 'yup'

export const LoginSchema = Yup.object({
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .required("Mobile number is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export interface LoginFormValues {
  mobile: string;
  password: string;
}

export const initialValues: LoginFormValues = {
    mobile: "",
    password: "",
};
