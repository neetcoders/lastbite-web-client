"use client"
import BuyerAddress from "@/components/BuyerDashboard/BuyerAddress";
import InputSearch from "@/components/BuyerDashboard/InputSearch";
import ProductCard from "@/components/ProductCard";
import React, { useEffect } from "react";
import axios from "axios"

const dummyData = [
  {
    productId: 1,
    productName: "Chitato Sapi",
    originPrice: "10.000",
    salePrice: "5.000",
    location: "Sakinah, Jawa Timur",
  },
  {
    productId: 2,
    productName: "Chitato Ayam",
    originPrice: "10.000",
    salePrice: "6.500",
    location: "Rungkut, Jawa Timur",
  },
  {
    productId: 3,
    productName: "Chitato Kambing",
    originPrice: "10.000",
    salePrice: "7.000",
    location: "Medokan, Jawa Timur",
  },
  {
    productId: 4,
    productName: "Chitato Domba",
    originPrice: "10.000",
    salePrice: "6.000",
    location: "Waru, Jawa Timur",
  },
  {
    productId: 5,
    productName: "Chitato Jerapah",
    originPrice: "10.000",
    salePrice: "6.000",
    location: "Waru, Jawa Timur",
  },
  {
    productId: 6,
    productName: "Chitato Gajah",
    originPrice: "10.000",
    salePrice: "6.000",
    location: "Waru, Jawa Timur",
  },
  {
    productId: 7,
    productName: "Chitato Sapi",
    originPrice: "10.000",
    salePrice: "5.000",
    location: "Sakinah, Jawa Timur",
  },
  {
    productId: 8,
    productName: "Chitato Ayam",
    originPrice: "10.000",
    salePrice: "6.500",
    location: "Rungkut, Jawa Timur",
  },
  {
    productId: 9,
    productName: "Chitato Kambing",
    originPrice: "10.000",
    salePrice: "7.000",
    location: "Medokan, Jawa Timur",
  },
  {
    productId: 10,
    productName: "Chitato Domba",
    originPrice: "10.000",
    salePrice: "6.000",
    location: "Waru, Jawa Timur",
  },
  {
    productId: 11,
    productName: "Chitato Jerapah",
    originPrice: "10.000",
    salePrice: "6.000",
    location: "Waru, Jawa Timur",
  },
  {
    productId: 12,
    productName: "Chitato Gajah",
    originPrice: "10.000",
    salePrice: "6.000",
    location: "Waru, Jawa Timur",
  },
];

const DashboardPage = () => {


  return (
    <div className="w-full px-[7%] py-6 lg:py-12">
      <div className="flex flex-col gap-9">
        <BuyerAddress />

        <InputSearch />

        <div className="grid grid-cols-2 gap-5 justify-center items-center lg:grid-cols-6">
          {dummyData.map((data) => (
            <ProductCard
              key={data.productId}
              productId={data.productId}
              productName={data.productName}
              originPrice={data.originPrice}
              salePrice={data.salePrice}
              location={data.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
