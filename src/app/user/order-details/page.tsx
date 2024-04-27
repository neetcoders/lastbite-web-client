"use client";

import { useCallback, useState, useEffect } from "react";
import {
    checkout,
  decreaseProductQty,
  deleteProductFromCart,
  deleteStoreFromCart,
  getOrderUserList,
  getUserCart,
  getUserOrderDetail,
  ICart,
  increaseProductQty,
  IOrder,
  toggleStoreSelected,
} from "@/app/services/orderUserService";
import { ButtonSuccessMedium } from "@/components/Button/Button";
import { FiTrash2 } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/navigation";

function OrderDetailPage() {

  const router = useRouter();

  const [orderDetailsData, setOrderDetails] = useState<ICart | null>(null);

  const getOrderDetails = useCallback(async () => {
    const orderDetails = await getUserOrderDetail();
    setOrderDetails(orderDetails);
  }, []);

  const storeDeleteFromCartHandler = useCallback(async (storeId: string) => {
    await deleteStoreFromCart(storeId);
  }, []);

  const productDeleteFromCartHandler = useCallback(
    async (productId: string) => {
      await deleteProductFromCart(productId);
    },
    []
  );

  const handleCheckout = useCallback(async () => {
    await checkout();
    router.push('/user/my-order')
  }, [router])

  useEffect(() => {
    getOrderDetails();
  });

  return (
    <div className="px-[2%] flex flex-col min-h-screen">
      <div className="flex flex-col my-4 gap-4">
        <div className="flex justify-between ">
          <h1 className="text-h6 text-success-main font-bold">Order Details</h1>
        </div>
        <div className="flex flex-col gap-5">
          {orderDetailsData?.orders.map((order, index) => (
            <div key={index}>
              <div className="flex flex-col gap-4 text-h1">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <input
                      className="w-5 h-5 border-[1px] border-typo-outline1 accent-success-main appearance-auto bg-success-main"
                      type="checkbox"
                      checked={
                        order.status === "in-cart-selected" ? true : false
                      }
                    />
                    <p className="text-paragraph font-semibold text-typo-main">
                      {order.store.display_name}
                    </p>
                  </div>
                  <button
                    className="text-h6"
                    onClick={() => {
                      storeDeleteFromCartHandler(order.store.id);
                    }}
                  >
                    <FiTrash2 />
                  </button>
                </div>

                <div className="flex flex-col gap-2 p-2 border-[1px] border-typo-main rounded-[10px]">
                  {order.products.map((product, index) => (
                    <div key={index} className="flex gap-4 items-center p-2">
                      <div className="flex items-start justify-start">
                        <input
                          className="w-5 h-5 border-[1px] border-typo-outline1 accent-success-main appearance-auto bg-success-main"
                          type="checkbox"
                          checked={product.selected}
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
                        <p className="text-caption py-0 text-typo-main">
                          Quantity : {product.quantity}
                        </p>
                      </div>
                      <div className="flex justify-end items-start">
                        <button
                          className="text-h6"
                          onClick={() => {
                            productDeleteFromCartHandler(product.id);
                          }}
                        >
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

        <div className="flex justify-between items-center ">
          <h1 className="text-h6 font-semibold text-typo-main">Total Order</h1>
          <span className="p-2">
            <ButtonSuccessMedium
              text="Checkout"
              onClick={handleCheckout}
            />
          </span>
        </div>

        <div className="flex flex-col gap-2 border-[1px] border-typo-main rounded-[10px] p-6">
          <div className="flex justify-between text-paragraph font-semibold text-typo-main">
            <h1>Price</h1>
            <h1>Rp{orderDetailsData?.total_price}</h1>
          </div>
          <div className="flex justify-between text-paragraph font-semibold text-typo-main">
            <h1>Payment</h1>
            <h1>Cash on Delivery</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailPage;
