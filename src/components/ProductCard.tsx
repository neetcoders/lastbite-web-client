import Image from "next/image";
import React from "react";
import { HiLocationMarker } from "react-icons/hi";

interface ProductCardProps {
  productId: string;
  productName: string;
  originPrice: string;
  salePrice: string;
  location: string;
  image_url: string | undefined;
}

function ProductCard(props: ProductCardProps) {
  const { productId, productName, originPrice, salePrice, location, image_url } = props;

  return (
    <div className="flex flex-col gap-[15px] w-full h-[269px] border-[1px] border-typo-main rounded-[5px] px-2 py-2.5">
      <div className="flex justify-center">
      <Image 
            src={image_url || "https://placehold.co/100x100"} 
            width={150}
            height={150}
            alt="Product Image" 
            className="w-[100px] h-[100px] mx-auto"
        />
      </div>
      <div className="flex flex-col gap-[7px] ">
        <p className="text-paragraph font-bold text-typo-main truncate ...">
          {productName}
        </p>
        <div>
          <p className="text-title font-semibold text-success-main">
            Rp{salePrice}
          </p>
          <p className="text-bodytext text-typo-main line-through">
            Rp{originPrice}
          </p>
        </div>
        <div className="flex gap-1.5 items-start overflow-hidden">
          <span className="text-typo-main text-h6">
            <HiLocationMarker />
          </span>
          <p className="text-typo-main text-bodytext line-clamp-2">{location}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
