"use client";

import React, { useContext } from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FiTrash2 } from "react-icons/fi";
import { ButtonSuccessMedium } from "@/components/Button/Button";
import AddAddressModal from "@/components/BuyerProfilePage/AddAddressModal";
import { AuthContext } from "@/app/services/BuyerAuthContext";

function Page() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex flex-col px-[7%]">
      <h1 className="text-success-main text-h6 font-bold my-[30px]">Profile</h1>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-bodytext font-bold text-typo-main">Name</h2>
          <div className="text-caption text-typo-main border-[1px] border-typo-main rounded-[5px] p-2">
            {currentUser?.display_name}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-bodytext font-bold text-typo-main">Email</h2>
          <div className="text-caption text-typo-main border-[1px] border-typo-main rounded-[5px] p-2">
            {currentUser?.email}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-bodytext font-bold text-typo-main">Birth Date</h2>
          <div className="text-caption text-typo-main border-[1px] border-typo-main rounded-[5px] p-2">
            {currentUser?.birth_date.substring(0, 10)}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-bodytext font-bold text-typo-main">Address</h2>

          <div className="flex justify-between text-caption text-typo-main border-[1px] border-typo-main rounded-[5px] p-2">
            <div className="flex flex-col justify-center">
              <p>Jl. Bekasi Raya No. 44, Jakarta Selatan</p>
              <p>-167.170544827814</p>
              <p>69.7681315313788</p>
            </div>

            <div className="flex flex-col justify-center gap-1">
              <button className="text-h6 text-typo-main">
                <HiOutlinePencilAlt />
              </button>
              <button className="text-h6 text-typo-main">
                <FiTrash2 />
              </button>
            </div>
          </div>

          <div className="flex justify-between text-caption text-typo-main border-[1px] border-typo-main rounded-[5px] p-2">
            <div className="flex flex-col justify-center">
              <p>Jl. Bekasi Raya No. 44, Jakarta Selatan</p>
              <p>-167.170544827814</p>
              <p>69.7681315313788</p>
            </div>

            <div className="flex flex-col justify-center gap-1">
              <button className="text-h6 text-typo-main">
                <HiOutlinePencilAlt />
              </button>
              <button className="text-h6 text-typo-main">
                <FiTrash2 />
              </button>
            </div>
          </div>

          <div className="flex justify-between text-caption text-typo-main border-[1px] border-typo-main rounded-[5px] p-2">
            <div className="flex flex-col justify-center">
              <p>Jl. Bekasi Raya No. 44, Jakarta Selatan</p>
              <p>-167.170544827814</p>
              <p>69.7681315313788</p>
            </div>

            <div className="flex flex-col justify-center gap-1">
              <button className="text-h6 text-typo-main">
                <HiOutlinePencilAlt />
              </button>
              <button className="text-h6 text-typo-main">
                <FiTrash2 />
              </button>
            </div>
          </div>
        </div>

        <ButtonSuccessMedium text="Add New Address" />
      </div>
    </div>
  );
}

export default Page;
