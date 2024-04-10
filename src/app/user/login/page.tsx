'use server'

import React from "react";
import LoginPage from "./Login-form";

const Login = async () => {

  return (
    <div className="flex -my-[7%]">
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
