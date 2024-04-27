"use client";

import { addToCart } from "@/app/services/orderServices";
import {
  IProduct,
  getProductDetails,
} from "@/app/services/productService";
import {
  ButtonSuccessLarge,
} from "@/components/Button/Button";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

export default function DetailPage({ params }: any) {

  const [productDetails, setProductDetails] = useState<IProduct | null>(null);

  const addToCartHandler = useCallback( async () => {
    await addToCart(params.id);    
  }, [params.id])

  const fetchProductDetails = useCallback(async () => {
    const product = await getProductDetails(params.id);
    setProductDetails(product);
  }, [params.id]);

  useEffect(() => {
    fetchProductDetails();
  }, [fetchProductDetails]);

  return (
    <div className="flex flex-col px-[7%] gap-14">

      <h1 className="text-h5 font-bold text-success-main">Product Detail</h1>
      <div className="flex flex-col gap-14">
        <Image
          src={productDetails?.image_url || "https://placehold.co/100x100"}
          width={150}
          height={150}
          alt="Product Image"
          className="w-[150px] h-[150px] mx-auto"
        />

        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col gap-2 lg:w-1/2">
            <div className="flex flex-col gap-1">
              <p className="text-title font-bold text-success-main">Name</p>
              <p className="text-title font-bold text-typo-main">
                {productDetails?.display_name}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-title font-bold text-success-main">
                Description
              </p>
              <p className="text-title font-bold text-typo-main">
                {productDetails?.description}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-title font-bold text-success-main">
                Price Before
              </p>
              <p className="text-title font-bold text-typo-main">
                Rp{productDetails?.price_before}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-title font-bold text-success-main">
                Price After
              </p>
              <p className="text-title font-bold text-typo-main">
                Rp{productDetails?.price_after}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-title font-bold text-success-main">Store</p>
              <p className="text-title font-bold text-typo-main">
                {productDetails?.store.display_name}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:w-1/2">
            <div className="flex flex-col gap-1">
              <p className="text-title font-bold text-success-main">
                Store Address
              </p>
              <p className="text-title font-bold text-typo-main">
                {productDetails?.store.address.street}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-title font-bold text-success-main">Exp Date</p>
              <p className="text-title font-bold text-typo-main">
                {productDetails?.expiration_date.substring(0, 10)}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-title font-bold text-success-main">Stock</p>
              <p className="text-title font-bold text-typo-main">
                {productDetails?.stock}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-title font-bold text-success-main">Category</p>
              <p className="text-title font-bold text-typo-main">
                {productDetails?.category.display_name}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <ButtonSuccessLarge
            text="Add to Cart"
            onClick={addToCartHandler}
          />
        </div>
      </div>
    </div>
  );
}
