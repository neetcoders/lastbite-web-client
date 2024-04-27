import React from "react";
import { IoChevronDown } from "react-icons/io5";

function BuyerAddress( street : any ) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-1">
        <p className="text-paragraph lg:text-title text-typo-main">Address</p>
      </div>
      <div>
        <p className="text-warning-main text-bodytext text-right lg:text-paragraph ">
          {street.street}
        </p>
        <p className="text-bodytext text-typo-outline1 text-right">Change your active address in profile</p>
      </div>
    </div>
  );
}

export default BuyerAddress;
