"use client";

import { IProduct, getMyProducts } from "@/app/services/productService";
import StoreProductCard from "@/components/StoreProductCard";
import { useCallback, useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";

function StoreProductPage() {
  const [storeProducts, setStoreProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const getCurrentStoreProducts = useCallback(async () => {
    setLoading(true);
    const products = await getMyProducts();
    setStoreProducts(products || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    getCurrentStoreProducts();
  }, [getCurrentStoreProducts]);

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
