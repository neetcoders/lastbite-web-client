import React from "react";
import LoginPage from "./Login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Login Buyer Page',
};

export default function Login() {

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
