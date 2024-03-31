import React from "react";
import Registerform from "./Register-form";

const Login = () => {

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
