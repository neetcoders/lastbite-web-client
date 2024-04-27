import Image from "next/image";
import React, { useCallback, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { ButtonSuccessSmall } from "../Button/Button";
import { toggleStoreSelected } from "@/app/services/orderUserService";

export type IStore = {
  id: string;
  display_name: string;
};
export type IProduct = {
  id: string;
  selected: boolean;
  quantity: number;
  display_name: string;
  price_before: number;
  price_after: number;
  stock: number;
  image_url: string;
};

export type ICart = {
  id: string;
  status: string;
  store: IStore;
  products: IProduct[];
  total_price: number;
};

interface CartCardProps {
    cart: ICart;
    onSubmit: (store_id: string) => void;
  }

const CartCard: React.FC<CartCardProps> = ({cart, onSubmit}) => {

    

  return (
    <div className="flex flex-col gap-4 text-h1">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <input
            className="w-5 h-5 border-[1px] border-typo-outline1 accent-success-main appearance-auto bg-success-main"
            type="checkbox"
            checked={cart.status === "in-cart-selected" ? true : false}
          />
          <p className="text-paragraph font-semibold text-typo-main">
            {cart.store.display_name}
          </p>
        </div>
        <button className="text-h6">
          <FiTrash2 />
        </button>
      </div>
    
    <div className="flex flex-col gap-2 p-2 border-[1px] border-typo-main rounded-[10px]">
      {cart.products.map((product, index) => (
        <div key={index} className="flex gap-4 items-center p-2">
          <div className="flex items-start justify-start">
            <input
              className="w-5 h-5 border-[1px] border-typo-outline1 accent-success-main appearance-auto bg-success-main"
              type="checkbox"
              checked={product.selected}
            />
          </div>
          <div>
            <Image
              src={product.image_url || "https://placehold.co/100x100"}
              width={150}
              height={150}
              alt="Product Image"
              className="w-[75px] h-[75px] mx-auto"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-caption font-semibold text-typo-main">
              {product.display_name}
            </p>
            <p className="flex gap-2">
              <span className="text-caption font-semibold text-success-main">
                Rp{product.price_after}
              </span>
              <span className="text-caption line-through text-typo-main">
                Rp{product.price_before}
              </span>
            </p>
            <div className="flex items-center gap-2">
              <button className="w-9 h-8 text-center px-2 bg-success-main text-typo-white text-h6 rounded-[12px]">
                -
              </button>
              <p className="text-paragraph font-semibold py-0 text-typo-main">
                {product.quantity}
              </p>
              <button className="w-9 h-8 text-center px-2 bg-success-main text-typo-white text-h6 rounded-[12px]">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-end items-start">
            <button className="text-h6">
              <FiTrash2 />
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default CartCard;
