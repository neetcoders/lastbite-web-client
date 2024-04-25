"use client";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useRef, useEffect } from "react";
import axios from "axios";

interface IProductCategory {
  slug: string;
  display_name: string;
}

interface IProductDetails {
  display_name: string;
  description: string;
  price_before: string;
  price_after: string;
  expiration_date: string;
  stock: number;
  category: IProductCategory;
}

interface FormData {
  name: string;
  description: string;
  price_before: number;
  price_after: number;
  exp_date: string;
  // stock: number;
  category: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
  productDatas: IProductDetails | null;
}

const EditProductModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  productDatas,
}) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: FormData = {
      name: event.currentTarget.product_name.value,
      description: event.currentTarget.description.value,
      price_before: event.currentTarget.price_before.value,
      price_after: event.currentTarget.price_after.value,
      exp_date: event.currentTarget.exp_date.value,
      // stock: event.currentTarget.stock.value,
      category: event.currentTarget.category.value,
    };
    onSubmit(formData);
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    isOpen && (
      <div
        className="px-8 py-8 border-[1px] border-typo-main rounded-[10px] absolute bg-typo-white w-[85vw] top-[60%] left-[50%] -translate-x-[50%] -translate-y-[50%] md:w-[40vw]"
        ref={modalRef}
      >
        <div className="flex justify-between items-center mb-[26px]">
          <p className="text-h6 font-bold text-typo-main">Edit Product</p>
          <span className="text-h6 flex items-center">
            <button>
              <IoCloseOutline onClick={onClose} />
            </button>
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2.5">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="product_name"
                className="text-bodytext font-bold text-typo-main"
              >
                Name
              </label>
              <input
                className="border-[1px] outline-none p-2 border-typo-main rounded-[5px] text-caption text-typo-outline1"
                type="text"
                name="product_name"
                id="product_name"
                placeholder="Input name"
                defaultValue={productDatas?.display_name}                
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="description"
                className="text-bodytext font-bold text-typo-main"
              >
                Description
              </label>
              <input
                className="border-[1px] outline-none p-2 border-typo-main rounded-[5px] text-caption text-typo-outline1"
                type="text"
                name="description"
                id="description"
                placeholder="Input description"
                defaultValue={productDatas?.description}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="price_before"
                className="text-bodytext font-bold text-typo-main"
              >
                Price Before
              </label>
              <input
                className="border-[1px] outline-none p-2 border-typo-main rounded-[5px] text-caption text-typo-outline1"
                type="text"
                name="price_before"
                id="price_before"
                placeholder="Input price before"
                defaultValue={productDatas?.price_before}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="price_after"
                className="text-bodytext font-bold text-typo-main"
              >
                Price After
              </label>
              <input
                className="border-[1px] outline-none p-2 border-typo-main rounded-[5px] text-caption text-typo-outline1"
                type="text"
                name="price_after"
                id="price_after"
                placeholder="Input price after"
                defaultValue={productDatas?.price_after}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="exp_date"
                className="text-bodytext font-bold text-typo-main"
              >
                Exp Date
              </label>
              <input
                className="border-[1px] outline-none p-2 border-typo-main rounded-[5px] text-caption text-typo-outline1"
                type="text"
                name="exp_date"
                id="exp_date"
                placeholder="YYYY-MM-DD"
                defaultValue={productDatas?.expiration_date.substring(0, 10)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="stock"
                className="text-bodytext font-bold text-typo-main"
              >
                Stock
              </label>
              <div className="border-[1px] outline-none p-2 border-typo-main rounded-[5px] text-caption text-typo-outline1">
                {productDatas?.stock}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="category"
                className="text-bodytext font-bold text-typo-main"
              >
                Category
              </label>
              <input
                className="border-[1px] outline-none p-2 border-typo-main rounded-[5px] text-caption text-typo-outline1"
                type="text"
                name="category"
                id="category"
                placeholder="Input category"
                defaultValue={productDatas?.category.slug}
              />
            </div>

            <button
              className="px-4 py-2 text-bodytext font-bold text-typo-white bg-success-main rounded-[12px] mt-3"
              type="submit"
            >
              Edit Product
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default EditProductModal;
