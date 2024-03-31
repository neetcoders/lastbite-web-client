import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as yup from "yup";
import LoginPage from "./Login-form";

interface LoginSchema {
  email: string;
  password: string;
}

const Login = () => {
  const initialValues: LoginSchema = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: LoginSchema, formikHelpers: any) => {
    console.log("Form submitted with values:", values);
    formikHelpers.setSubmitting(false);
  };

  return (
    <div className="flex">
      <div className="w-full items-center justify-center text-h5 text-success-main font-bold hidden lg:flex">
        LASTBITE LOGO
      </div>
      <div className="flex w-full items-center justify-center">
        <LoginPage />
      </div>
    </div>
  );
};
export default Login;
