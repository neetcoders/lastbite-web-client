'use client';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { getPublicProduct, IProduct } from "@/app/services/productService";
import InputSearch from "@/components/BuyerDashboard/InputSearch";
import ProductPublicCard from "@/components/ProductCard";
import { useCallback, useEffect, useState } from "react";
import { AuthContext } from "@/app/services/BuyerAuthContext";
import { useContext } from 'react';
import Link from "next/link";

export default function Home() {

  const [productDisplayed, setProductDisplayed] = useState<IProduct[] | null>(
    null
  );
  const [searchParams, setSearchParams] = useState<string>()
  const { currentUser, refetchCurrentUser } = useContext(AuthContext);
  
  const getProductDisplayed = useCallback(async () => {
    const publicProduct = await getPublicProduct(searchParams);
    setProductDisplayed(publicProduct);
  }, [searchParams]);

  const handleSearchProductSubmit = useCallback(async (searchProduct: string) => {
    setSearchParams(searchProduct);
  }, []);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        await refetchCurrentUser();
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    };
    fetchData();
    getProductDisplayed();
  }, [getProductDisplayed]);

  return (
    <main>
      <Navbar />

      <section className="flex justify-center items-center h-screen px-4">
        <div className="flex flex-col items-center justify-center">
          <p className="text-h3 md:text-h2 font-bold text-success-main">Last<span className="text-typo-main">Bite</span></p>
          <p className="text-h4 md:text-h3 font-bold text-warning-main text-center">Save Food, Save Money!</p>
        </div>
      </section>

      <section id="about-us" className="py-12 px-12 md:py-24 bg-success-main">
        <div className="flex flex-col items-center justify-center">
          <p className="text-h3 md:text-h2 font-bold text-warning-main">About Us</p>
          <p className="mt-4 font-semibold text-title text-center text-typo-white">
            LastBite as a solution to facilitate the sale and purchase of products that are approaching their expiration date in an efficient and sustainable way. By leveraging technology and digital platforms, LastBite can connect supermarkets with potential consumers interested in purchasing these products at discounted prices, while also helping reduce food waste and supporting environmental sustainability efforts.
          </p>
        </div>
      </section>

      <section id="order" className="px-12 py-12">
        <div className="flex flex-col items-center justify-center">
          <p className="text-h3 md:text-h2 font-bold text-success-main">Order</p>
        </div>
        <div className="w-full px-[7%] mt-6">
          <div className="flex flex-col gap-9">
            <InputSearch onSubmit={handleSearchProductSubmit}/>

            {productDisplayed != null ? (
              <div className="grid grid-cols-2 gap-5 justify-center items-center lg:grid-cols-6">
                {productDisplayed?.map((data) => (
                  <ProductPublicCard
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
        <div className="px-24 flex justify-end mt-4">
          <Link className='text-paragraph text-success-main hover:cursor-pointer font-semibold underline underline-offset-4' href='user/login'>Login to order</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
