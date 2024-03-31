import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as yup from "yup";
import Registerform from "./Register-form";


interface RegisterSchema {
  email: string;
  password: string;
}

const Login = () => {
  const initialValues: RegisterSchema = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: RegisterSchema, formikHelpers: any) => {
    console.log("Form submitted with values:", values);
    formikHelpers.setSubmitting(false);
  };

  return (
    <div className="flex">
      <div className="w-full items-center justify-center text-h5 text-success-main font-bold hidden lg:flex">
        LASTBITE LOGO
      </div>
      <div className="flex w-full items-center justify-center">
        <Registerform />
      </div>
    </div>
  );
};
export default Login;
