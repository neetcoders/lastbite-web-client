"use client";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";

function AddAddressModal() {
  return (
    <div className="px-[7%] py-8 border-[1px] border-typo-main rounded-[10px] min-w-max">
      <div className="flex justify-between items-center mb-[26px]">
        <p className="text-h6 font-bold text-typo-main">Add New Address</p>
        <span className="text-h6 flex items-center">
          <button>
            <IoCloseOutline />
          </button>
        </span>
      </div>

      <form onSubmit={() => alert("joss")}>
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="street"
              className="text-bodytext font-bold text-typo-main"
            >
              Street
            </label>
            <input
              className="border-[1px] outline-none p-2 border-typo-main rounded-[5px] text-caption text-typo-outline1"
              type="text"
              name="street"
              id="street"
              placeholder="Input street"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="longtitude"
              className="text-bodytext font-bold text-typo-main"
            >
              Longtitude
            </label>
            <input
              className="border-[1px] outline-none p-2 border-typo-main rounded-[5px] text-caption text-typo-outline1"
              type="text"
              name="longtitude"
              id="longtitude"
              placeholder="Input longtitude"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="latitude"
              className="text-bodytext font-bold text-typo-main"
            >
              Latitude
            </label>
            <input
              className="border-[1px] outline-none p-2 border-typo-main rounded-[5px] text-caption text-typo-outline1"
              type="text"
              name="latitude"
              id="latitude"
              placeholder="Input latitude"
            />
          </div>

          <button
            className="px-4 py-2 text-bodytext font-bold text-typo-white bg-success-main rounded-[12px] mt-3"
            type="submit"
          >
            Add New Address
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddAddressModal;
