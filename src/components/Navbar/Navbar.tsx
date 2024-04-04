import Link from "next/link";
import React, { useState } from "react";
import { SlMenu } from "react-icons/sl";
import {
  ButtonBlackLarge,
  ButtonBlackSmall,
  ButtonWhiteLarge,
  ButtonWhiteSmall,
} from "../Button/Button";

function Navbar() {
  const [modal, setModal] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="flex w-[100%] bg-success-main px-[7%] py-4 items-center justify-between">
      <div className="font-bold text-h6 text-typo-white lg:text-h4">
        Last<span className="text-typo-main">Bite</span>
      </div>
      <div className="text-h5 font-bold flex items-center text-typo-white lg:hidden">
        <button onClick={handleModal}>
          <SlMenu />
        </button>
      </div>
      <div className="text-h5 font-bold items-center text-typo-white hidden lg:flex ">
        {isLoggedIn ? (
          <ButtonWhiteLarge text="Logout" />
        ) : (
          <div className="flex gap-2.5">
            <ButtonBlackLarge text="Register" to="/register" />
            <ButtonWhiteLarge text="Login" to="/login" />
          </div>
        )}
      </div>
      {modal ? (
        ""
      ) : (
        <div className="absolute top-16 w-[100%] left-0 bg-success-main px-[7%] py-4 ">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col text-caption font-bold text-black gap-2">
              {isLoggedIn ? (
                <>
                  <Link href={"/about"}>Profile &amp; Address</Link>
                  <Link href={"/order"}>Cart</Link>
                </>
              ) : (
                <>
                  <Link href={"/about"}>About Us</Link>
                  <Link href={"/order"}>Order</Link>
                </>
              )}
            </div>
            <div className="flex flex-col gap-3.5 pb-4">
              {isLoggedIn ? (
                <ButtonWhiteSmall text="Logout" />
              ) : (
                <>
                  <ButtonBlackSmall text="Register" to="/register" />
                  <ButtonWhiteSmall text="Login" to="/login" />
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
