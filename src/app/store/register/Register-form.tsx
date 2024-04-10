"use client";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { HiOutlineHome } from "react-icons/hi";

const Registerform = () => {
  const validationSchema = Yup.object().shape({
    nama: Yup.string()
      .min(3, "Nama harus memiliki 3 - 72 karakter")
      .max(72, "Nama harus memiliki 3 - 72 karakter")
      .required("Nama harus diisi"),
    email: Yup.string()
      .email("Email tidak valid")
      .required("Email harus diisi"),
    birthdate: Yup.string()
      .required("Tanggal lahir harus diisi")
      .matches(
        /^\d{4}-\d{2}-\d{2}$/,
        "Format tanggal tidak tepat (YYYY-MM-DD)"
      ),
    password: Yup.string()
      .required("Password harus diisi")
      .min(8, "Password harus memiliki 8 - 127 karakter")
      .max(127, "Password harus memiliki 8 - 127 karakter"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password tidak cocok")
      .required("Konfirmasi Password harus diisi"),
  });

  const handleSubmit = (
    values: {
      nama: string;
      email: string;
      birthdate: string;
      password: string;
      confirmpassword: string;
    },
    actions: any
  ) => {
    console.log("Data Form:", values);
    actions.setSubmitting(false);
    actions.resetForm({
      values: {
        nama: "",
        email: "",
        birthdate: "",
        password: "",
        confirmpassword: "",
      },
    });
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full min-h-screen">
      <div className="flex flex-col w-[80%] lg:w-[60%]">
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
          <h3 className="flex text-success-main font-bold text-h3">Register</h3>
        </div>
      </div>
      <div className="flex w-[80%] lg:w-[60%]">
        <Formik
          initialValues={{
            nama: "",
            email: "",
            birthdate: "",
            password: "",
            confirmpassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <label className="text-typo-main font-bold" htmlFor="nama">
                    Nama <span className="text-danger-main">*</span>
                  </label>
                  <Field
                    className={`bg-typo-white border-[1px] rounded-[5px] py-1.5 px-2 text-caption ${
                      touched.nama && errors.nama
                        ? "border-danger-main"
                        : "border-typo-main"
                    }`}
                    type="text"
                    id="nama"
                    name="nama"
                    placeholder="John Doe"
                  />
                  {touched.nama && errors.nama && (
                    <p className="text-caption text-danger-main">
                      {errors.nama}
                    </p>
                  )}
                </div>

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

                <div className="flex flex-col gap-1">
                  <label className="text-typo-main font-bold" htmlFor="email">
                    Birth Date <span className="text-danger-main">*</span>
                  </label>
                  <Field
                    className={`bg-typo-white border-[1px] rounded-[5px] py-1.5 px-2 text-caption ${
                      touched.birthdate && errors.birthdate
                        ? "border-danger-main"
                        : "border-typo-main"
                    }`}
                    type="text"
                    id="birthdate"
                    name="birthdate"
                    placeholder="YYYY-MM-DD"
                  />
                  {touched.birthdate && errors.birthdate && (
                    <p className="text-caption text-danger-main">
                      {errors.birthdate}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1">
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

                <div className="flex flex-col gap-1">
                  <label
                    className="text-typo-main font-bold"
                    htmlFor="confirmpassword"
                  >
                    Confirm Password <span className="text-danger-main">*</span>
                  </label>
                  <Field
                    className={`bg-typo-white border-[1px] rounded-[5px] py-1.5 px-2 text-caption ${
                      touched.confirmpassword && errors.confirmpassword
                        ? "border-danger-main"
                        : "border-typo-main"
                    }`}
                    type="password"
                    id="confirmpassword"
                    name="confirmpassword"
                  />
                  {touched.confirmpassword && errors.confirmpassword && (
                    <p className="text-caption text-danger-main">
                      {errors.confirmpassword}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-success-main text-typo-white py-2 text-bodytext font-bold rounded-[5px] w-full"
              >
                {isSubmitting ? "Loading..." : "Register"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <p className="-mt-4 flex gap-1 text-caption text-typo-main">
        Already have an account?{" "}
        <Link className="text-success-main font-semibold" href={"/store/login"}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default Registerform;
