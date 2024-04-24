"use client";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { HiOutlineHome } from "react-icons/hi";
import { register } from "@/app/services/userService";
import { useRouter } from "next/navigation";

interface IRegisterSchema {
  display_name: string;
  email: string;
  birth_date: string;
  password: string;
  confirm_password: string;
} 

const Registerform = () => {
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    display_name: Yup.string()
      .min(3, "Nama harus memiliki 3 - 72 karakter")
      .max(72, "Nama harus memiliki 3 - 72 karakter")
      .required("Nama harus diisi"),
    email: Yup.string()
      .email("Email tidak valid")
      .required("Email harus diisi"),
    birth_date: Yup.string()
      .required("Tanggal lahir harus diisi")
      .matches(
        /^\d{4}-\d{2}-\d{2}$/,
        "Format tanggal tidak tepat (YYYY-MM-DD)"
      ),
    password: Yup.string()
      .required("Password harus diisi")
      .min(8, "Password harus memiliki 8 - 127 karakter")
      .max(127, "Password harus memiliki 8 - 127 karakter"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password")], "Password tidak cocok")
      .required("Konfirmasi Password harus diisi"),
  });

  const handleSubmit = async (values: IRegisterSchema, actions: any) => {
    const registerRequest = await register(values);

    if (registerRequest) {
      router.push("/user/login");      
    }
    else {
      router.refresh();
    }

    actions.setSubmitting(false);
    actions.resetForm({
      values: {
        display_name: "",
        email: "",
        birth_date: "",
        password: "",
        confirm_password: "",
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
            display_name: "",
            email: "",
            birth_date: "",
            password: "",
            confirm_password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <label className="text-typo-main font-bold" htmlFor="display_name">
                    Nama <span className="text-danger-main">*</span>
                  </label>
                  <Field
                    className={`bg-typo-white border-[1px] rounded-[5px] py-1.5 px-2 text-caption ${
                      touched.display_name && errors.display_name
                        ? "border-danger-main"
                        : "border-typo-main"
                    }`}
                    type="text"
                    id="display_name"
                    name="display_name"
                    placeholder="John Doe"
                  />
                  {touched.display_name && errors.display_name && (
                    <p className="text-caption text-danger-main">
                      {errors.display_name}
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
                  <label className="text-typo-main font-bold" htmlFor="birth_date">
                    Birth Date <span className="text-danger-main">*</span>
                  </label>
                  <Field
                    className={`bg-typo-white border-[1px] rounded-[5px] py-1.5 px-2 text-caption ${
                      touched.birth_date && errors.birth_date
                        ? "border-danger-main"
                        : "border-typo-main"
                    }`}
                    type="text"
                    id="birth_date"
                    name="birth_date"
                    placeholder="YYYY-MM-DD"
                  />
                  {touched.birth_date && errors.birth_date && (
                    <p className="text-caption text-danger-main">
                      {errors.birth_date}
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
                    htmlFor="confirm_password"
                  >
                    Confirm Password <span className="text-danger-main">*</span>
                  </label>
                  <Field
                    className={`bg-typo-white border-[1px] rounded-[5px] py-1.5 px-2 text-caption ${
                      touched.confirm_password && errors.confirm_password
                        ? "border-danger-main"
                        : "border-typo-main"
                    }`}
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                  />
                  {touched.confirm_password && errors.confirm_password && (
                    <p className="text-caption text-danger-main">
                      {errors.confirm_password}
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
        <Link className="text-success-main font-semibold" href={"/user/login"}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default Registerform;
