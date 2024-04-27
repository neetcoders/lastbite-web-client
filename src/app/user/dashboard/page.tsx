"use client";
import { getUserActiveAddress, IAddress } from "@/app/services/addressService";
import { AuthContext } from "@/app/services/BuyerAuthContext";
import { getPublicProduct, getUserNearestProduct, IProduct } from "@/app/services/productService";
import BuyerAddress from "@/components/BuyerDashboard/BuyerAddress";
import InputSearch from "@/components/BuyerDashboard/InputSearch";
import ProductCard from "@/components/ProductCard";
import { useCallback, useContext, useEffect, useState } from "react";

const DashboardPage = () => {
  const { currentUser } = useContext(AuthContext);

  const [userActiveAddress, setUserActiveAddress] = useState<IAddress | null>(
    null
  );
  const [productDisplayed, setProductDisplayed] = useState<IProduct[] | null>(
    null
  );

  const [searchParams, setSearchParams] = useState<string>()

  const getActiveAddress = useCallback(async () => {
    if (currentUser == undefined) {
      setUserActiveAddress(null);
    } else {
      const address = await getUserActiveAddress();
      setUserActiveAddress(address);
    }
  }, [currentUser]);

  const getProductDisplayed = useCallback(async () => {
    if (currentUser == undefined) {
      const publicProduct = await getPublicProduct(searchParams);
      if (publicProduct) {
        setProductDisplayed(publicProduct);
      } else {
        setProductDisplayed(null)
      }
    } else {
      const userNearestProduct = await getUserNearestProduct(searchParams);
      if (userNearestProduct) {
        setProductDisplayed(userNearestProduct);
      } else {
        setProductDisplayed(null)
      }
    }
  }, [currentUser, searchParams]);

  const handleSearchProductSubmit = useCallback(async (searchProduct: string) => {
    setSearchParams(searchProduct);
  }, []);

  useEffect(() => {
    getProductDisplayed();
    getActiveAddress();
  }, [getProductDisplayed, getActiveAddress]);

  return (
    <div className="w-full px-[7%]">
      <div className="flex flex-col gap-9">
        <BuyerAddress street={userActiveAddress?.street} />

        <InputSearch onSubmit={handleSearchProductSubmit}/>

        {productDisplayed != null ? (
          <div className="grid grid-cols-2 gap-5 justify-center items-center lg:grid-cols-6">
            {productDisplayed?.map((data) => (
              <ProductCard
                key={data.id}
                productId={data.id}
                productName={data.display_name}
                originPrice={data.price_before}
                salePrice={data.price_after}
                location={data.store?.display_name}
                image_url={data.image_url}
              />
            ))}
          </div>
        ) : <div>No Product Found</div>
        }

      </div>
    </div>
  );
};

export default DashboardPage;
