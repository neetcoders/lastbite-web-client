"use client";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { HiOutlineHome } from "react-icons/hi";

const Loginform = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email tidak valid")
      .required("Email harus diisi"),
    password: Yup.string().required("Password harus diisi"),
  });

  const handleSubmit = (
    values: { email: string; password: string },
    actions: any
  ) => {
    console.log("Data Form:", values);
    actions.setSubmitting(false);
    actions.resetForm({
      values: {
        email: "",
        password: "",
      },
    });
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full min-h-screen">
      <div className="flex flex-col gap-[27px] w-[80%] lg:w-[60%]">
        <Link href={"/"}>
          <div className="flex items-center gap-2.5">
            <span className="text-success-main text-h6">
              <HiOutlineHome />
            </span>
            <p className="text-paragraph font-bold underline text-success-main">
              Back to homepage
            </p>
          </div>
        </Link>
        <div className="flex">
          <h3 className="flex text-success-main font-bold text-h3">Login</h3>
        </div>
      </div>
      <div className="flex w-[80%] lg:w-[60%]">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <label className="text-typo-main font-bold" htmlFor="email">
                    Email <span className="text-danger-main">*</span>
                  </label>
                  <Field
                    className={`bg-typo-white border-[1px] rounded-[5px] py-1.5 px-2 text-caption ${
                      touched.email && errors.email
                        ? "border-danger-main"
                        : "border-typo-main"
                    }`}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@example.com"
                  />
                  {touched.email && errors.email && (
                    <p className="text-caption text-danger-main">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-typo-main font-bold"
                    htmlFor="password"
                  >
                    Password <span className="text-danger-main">*</span>
                  </label>
                  <Field
                    className={`bg-typo-white border-[1px] rounded-[5px] py-1.5 px-2 text-caption ${
                      touched.password && errors.password
                        ? "border-danger-main"
                        : "border-typo-main"
                    }`}
                    type="password"
                    id="password"
                    name="password"
                  />
                  {touched.password && errors.password && (
                    <p className="text-caption text-danger-main">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-success-main text-typo-white py-2 text-bodytext font-bold rounded-[5px] w-full"
              >
                {isSubmitting ? "Loading..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <p className="-mt-4 flex gap-1 text-caption text-typo-main">
        Don&#39;t have an account?{" "}
        <Link className="text-success-main font-semibold" href={"/register"}>
          Register
        </Link>
      </p>
    </div>
  );
};

export default Loginform;
