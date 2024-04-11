"use client";

import StoreProductCard from "@/components/StoreProductCard";
import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "@/app/services/StoreAuthContext";
import axios from "axios";
import getAuthToken from "@/app/services/getAuthToken";

interface IStoreProduct {
  id: string;
  display_name: string;
  price_after: string;
  price_before: string;
  stock: number;
}

function StoreProductPage() {
  const storeDataContext = useContext(AuthContext);
  const [authToken, setAuthToken] = useState<string | undefined>(undefined);
  const [storeProducts, setStoreProducts] = useState<IStoreProduct[] | []>([]);
  const [loading, setLoading] = useState(true);

  const getToken = async () => {
    const token = await getAuthToken();
    setAuthToken(token);
  };

  const getCurrentStoreProducts = async () => {
    try {
      const products = await axios.get(
        "http://localhost:8000/api/v1/product/my-products",
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          data: {
            email: storeDataContext?.email,
          },
        }
      );
      setStoreProducts(products.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
    }
  };

  useEffect(() => {
    getToken();
    getCurrentStoreProducts();
  }, [authToken]);

  return (
    <div className="px-[7%] flex flex-col">
      <div className="flex justify-between my-4 items-center">
        <h1 className="text-h6 text-success-main font-bold">Products</h1>
        <button className="px-[18px] py-[12px] bg-success-main text-typo-white rounded-[12px] text-h6 font-bold">
          <FiPlus />
        </button>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-2 gap-5 justify-center items-center lg:grid-cols-6">
          {storeProducts.map((data) => (
              <StoreProductCard
                key={data.id}
                productId={data.id}
                productName={data.display_name}
                originPrice={data.price_before}
                salePrice={data.price_after}
                stock={data.stock}
              />
          ))}
        </div>
      )}
    </div>
  );
}

export default StoreProductPage;
