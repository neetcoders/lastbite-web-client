import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

interface IStoreProductCardProps {
  productId: string;
  productName: string;
  originPrice: string;
  salePrice: string;
  stock: number;
}

function StoreProductCard(props: IStoreProductCardProps) {

  const router = useRouter()

  const { productId, productName, originPrice, salePrice, stock } = props;

  const handleDetailProduct = (productId : string) => {
    router.push(`product/${productId}`)
  }

  return (
    <button onClick={() => handleDetailProduct(productId)}>
      <div className="flex flex-col text-left gap-[15px] w-full h-[262px] border-[1px] justify-center border-typo-main rounded-[5px] px-2 py-2.5">
        <div className="flex justify-center">
          <img src="https://placehold.co/100x100" alt="product-image" />
        </div>
        <div className="flex flex-col gap-[7px]">
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
          <div className="flex gap-1.5 items-start">
            <p className="text-typo-main text-bodytext">Stock : {stock}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

export default StoreProductCard;
