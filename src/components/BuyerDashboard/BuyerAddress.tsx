import React from "react";
import { IoChevronDown } from "react-icons/io5";

function BuyerAddress() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-1 items-center">
        <p className="text-paragraph lg:text-title text-typo-main">Address</p>
        <span className="text-title">
          <IoChevronDown />
        </span>
      </div>
      <p className="text-typo-outline1 text-bodytext text-right lg:text-paragraph ">
        Jl. Kenanga Blok K9 No. 10, Surabaya, Jawa Timur
      </p>
    </div>
  );
}

export default BuyerAddress;
