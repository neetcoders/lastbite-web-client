import { ButtonDangerLarge, ButtonSuccessLarge } from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import React from "react";

function DetailPage({ params }: any) {
  return (
    // py sementara nanti dihapus
    <div className="flex flex-col px-[7%] gap-14"> 
      <h1 className="text-h5 font-bold text-success-main">Product Detail</h1>
      <div className="flex flex-col gap-14">
        <img src="https://placehold.co/100x100" alt="product-image" className="w-[150px] h-[150px] mx-auto"/>

        <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-1/2">
                <div className="flex flex-col gap-1">
                    <p className="text-title font-bold text-success-main">Name</p>
                    <p className="text-title font-bold text-typo-main">Chitato Sapi</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-title font-bold text-success-main">Description</p>
                    <p className="text-title font-bold text-typo-main">Chitato Sapi enak lo guys</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-title font-bold text-success-main">Price Before</p>
                    <p className="text-title font-bold text-typo-main">Rp10000</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-title font-bold text-success-main">Price After</p>
                    <p className="text-title font-bold text-typo-main">Rp5000</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 lg:w-1/2">
                <div className="flex flex-col gap-1">
                    <p className="text-title font-bold text-success-main">Exp Date</p>
                    <p className="text-title font-bold text-typo-main">04-04-2024</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-title font-bold text-success-main">Stock</p>
                    <p className="text-title font-bold text-typo-main">10</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-title font-bold text-success-main">Category</p>
                    <p className="text-title font-bold text-typo-main">Snack</p>
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
