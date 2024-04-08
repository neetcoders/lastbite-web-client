"use client"

import StoreProductCard from "@/components/StoreProductCard";
import Link from "next/link";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { useRouter } from 'next/navigation'

const dummyData = [
  {
    productId: 1,
    productName: "Chitato Sapi",
    originPrice: "10.000",
    salePrice: "5.000",
    stock: 10,
  },
  {
    productId: 2,
    productName: "Chitato Ayam",
    originPrice: "10.000",
    salePrice: "6.500",
    stock: 10,
  },
  {
    productId: 3,
    productName: "Chitato Kambing",
    originPrice: "10.000",
    salePrice: "7.000",
    stock: 10,
  },
  {
    productId: 4,
    productName: "Chitato Domba",
    originPrice: "10.000",
    salePrice: "6.000",
    stock: 10,
  },
  {
    productId: 5,
    productName: "Chitato Jerapah",
    originPrice: "10.000",
    salePrice: "6.000",
    stock: 10,
  },
  {
    productId: 6,
    productName: "Chitato Gajah",
    originPrice: "10.000",
    salePrice: "6.000",
    stock: 10,
  },
  {
    productId: 7,
    productName: "Chitato Sapi",
    originPrice: "10.000",
    salePrice: "5.000",
    stock: 10,
  },
  {
    productId: 8,
    productName: "Chitato Ayam",
    originPrice: "10.000",
    salePrice: "6.500",
    stock: 10,
  },
  {
    productId: 9,
    productName: "Chitato Kambing",
    originPrice: "10.000",
    salePrice: "7.000",
    stock: 10,
  },
  {
    productId: 10,
    productName: "Chitato Domba",
    originPrice: "10.000",
    salePrice: "6.000",
    stock: 10,
  },
  {
    productId: 11,
    productName: "Chitato Jerapah",
    originPrice: "10.000",
    salePrice: "6.000",
    stock: 10,
  },
  {
    productId: 12,
    productName: "Chitato Gajah",
    originPrice: "10.000",
    salePrice: "6.000",
    stock: 10,
  },
];

function StoreProductPage() {
  
  const router = useRouter()
  
  return (
    <div className="px-[7%] flex flex-col">
      <div className="flex justify-between my-4 items-center">
        <h1 className="text-h6 text-success-main font-bold">Products</h1>
        <button className="px-[18px] py-[12px] bg-success-main text-typo-white rounded-[12px] text-h6 font-bold">
          <FiPlus />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-5 justify-center items-center lg:grid-cols-6">
        {dummyData.map((data) => (
            <Link key={data.productId} href={`product/${data.productId}`}>
                <StoreProductCard
                  productId={data.productId}
                  productName={data.productName}
                  originPrice={data.originPrice}
                  salePrice={data.salePrice}
                  stock={data.stock}
                />
            </Link>
        ))}
      </div>
    </div>
  );
}

export default StoreProductPage;
