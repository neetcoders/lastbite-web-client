"use client";

import { useCallback, useState, useEffect } from "react";
import { decreaseProductQty, deleteProductFromCart, deleteStoreFromCart, getUserCart, ICart, increaseProductQty, toggleProductSelected, toggleStoreSelected } from "@/app/services/orderUserService";
import { ButtonSuccessMedium } from "@/components/Button/Button";
import { FiTrash2 } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/navigation";

function CartPage() {

  const router = useRouter()

  const [cartListData, setCartListData] = useState<ICart | null | undefined>();

  const getOrderListsData = useCallback(async () => {
    const cartList = await getUserCart();
    setCartListData(cartList);
  }, [cartListData]);

  const storeToggleHandler = useCallback(async ( storeId: string ) => {
      await toggleStoreSelected(storeId);
  }, []);

  const productToggleHandler = useCallback(async ( productId: string ) => {
    await toggleProductSelected(productId);
}, []);

  const storeDeleteFromCartHandler = useCallback(async ( storeId: string ) => {
    await deleteStoreFromCart(storeId);
  }, [])

  const productDeleteFromCartHandler = useCallback(async ( productId: string ) => {
    await deleteProductFromCart(productId);
  }, [])

  const increaseProductQtyHandler = useCallback(async ( productId: string ) => {
    await increaseProductQty(productId);
  }, [])

  const decreaseProductQtyHandler = useCallback(async ( productId: string ) => {
    await decreaseProductQty(productId);
  }, [])

  useEffect(() => {
    getOrderListsData();
  });

  return (
    <div className="px-[2%] flex flex-col min-h-screen">
      <div className="flex flex-col my-4 gap-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-h6 text-success-main font-bold">Cart</h1>
          <div className="w-24">
            <ButtonSuccessMedium text="Next" onClick={() => router.push('/user/order-details')}/>
          </div>
        </div>

        {
          cartListData?.orders?.length ? (

            <div className="flex flex-col gap-5">
              {cartListData?.orders.map((cart, index) => (
                <div key={index}>
                  <div className="flex flex-col gap-4 text-h1">
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <input
                          className="w-5 h-5 border-[1px] border-typo-outline1 accent-success-main appearance-auto bg-success-main"
                          type="checkbox"
                          checked={
                            cart.status === "in-cart-selected" ? true : false
                          }
                          onClick={() => {
                            storeToggleHandler(cart.store.id)
                          }}
                        />
                        <p className="text-paragraph font-semibold text-typo-main">
                          {cart.store.display_name}
                        </p>
                      </div>
                      <button className="text-h6" onClick={ () => {
                        storeDeleteFromCartHandler(cart.store.id)
                      } }>
                        <FiTrash2 />
                      </button>
                    </div>

                    <div className="flex flex-col gap-2 p-2 border-[1px] border-typo-main rounded-[10px]">
                      {cart.products.map((product, index) => (
                        <div key={index} className="flex gap-4 items-center p-2">
                          <div className="flex items-start justify-start">
                            <input
                              className="w-5 h-5 border-[1px] border-typo-outline1 accent-success-main appearance-auto bg-success-main"
                              type="checkbox"
                              checked={product.selected}
                              onClick={() => productToggleHandler(product.id)}
                            />
                          </div>
                          <div>
                            <Image
                              src={
                                product.image_url || "https://placehold.co/100x100"
                              }
                              width={150}
                              height={150}
                              alt="Product Image"
                              className="w-[75px] h-[75px] mx-auto"
                            />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-caption font-semibold text-typo-main">
                              {product.display_name}
                            </p>
                            <p className="flex gap-2">
                              <span className="text-caption font-semibold text-success-main">
                                Rp{product.price_after}
                              </span>
                              <span className="text-caption line-through text-typo-main">
                                Rp{product.price_before}
                              </span>
                            </p>
                            <div className="flex items-center gap-2">
                              <button onClick={() => {
                                decreaseProductQtyHandler(product.id)
                              }} className="w-9 h-8 text-center px-2 bg-success-main text-typo-white text-h6 rounded-[12px]">
                                -
                              </button>
                              <p className="text-paragraph font-semibold py-0 text-typo-main">
                                {product.quantity}
                              </p>
                              <button onClick={() => {
                                increaseProductQtyHandler(product.id)
                              }} className="w-9 h-8 text-center px-2 bg-success-main text-typo-white text-h6 rounded-[12px]">
                                +
                              </button>
                            </div>
                          </div>
                          <div className="flex justify-end items-start">
                            <button className="text-h6" onClick={ () => {
                              productDeleteFromCartHandler(product.id)
                            } }>
                              <FiTrash2 />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-paragraph text-typo-main ">Your cart still empty...</div>
          )
        }


      </div>
    </div>
  );
}

export default CartPage;
