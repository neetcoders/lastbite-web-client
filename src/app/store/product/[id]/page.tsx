"use client"

import { ButtonDangerLarge, ButtonSuccessLarge } from "@/components/Button/Button";
import axios from "axios";
import React, { useEffect, useState } from "react";

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

function DetailPage({ params }: any) {
    const url = `http://localhost:8000/api/v1/product/${params.id}`

    const [productDetails, setProductDetails] = useState<IProductDetails>()

    const getProductDetails = async () => {
        const response = await axios(url)
        setProductDetails(response.data.data)
    }

    useEffect(() => {
        getProductDetails()
    })

  return (
    <div className="flex flex-col px-[7%] gap-14"> 
      <h1 className="text-h5 font-bold text-success-main">Product Detail</h1>
      <div className="flex flex-col gap-14">
        <img src="https://placehold.co/100x100" alt="product-image" className="w-[150px] h-[150px] mx-auto"/>

        <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-1/2">
                <div className="flex flex-col gap-1">
                    <p className="text-title font-bold text-success-main">Name</p>
                    <p className="text-title font-bold text-typo-main">{productDetails?.display_name}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-title font-bold text-success-main">Description</p>
                    <p className="text-title font-bold text-typo-main">{productDetails?.description}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-title font-bold text-success-main">Price Before</p>
                    <p className="text-title font-bold text-typo-main">Rp{productDetails?.price_before}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-title font-bold text-success-main">Price After</p>
                    <p className="text-title font-bold text-typo-main">Rp{productDetails?.price_after}</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 lg:w-1/2">
                <div className="flex flex-col gap-1">
                    <p className="text-title font-bold text-success-main">Exp Date</p>
                    <p className="text-title font-bold text-typo-main">{productDetails?.expiration_date.substring(0, 10)}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-title font-bold text-success-main">Stock</p>
                    <p className="text-title font-bold text-typo-main">{productDetails?.stock}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-title font-bold text-success-main">Category</p>
                    <p className="text-title font-bold text-typo-main">{productDetails?.category.display_name}</p>
                </div>
            </div>

        </div>

        <div className="flex flex-col gap-4">
            <ButtonSuccessLarge text="Edit Product"/>
            <ButtonDangerLarge text="Delete Product"/>
        </div>

      </div>
    </div>
  );
}

export default DetailPage;
