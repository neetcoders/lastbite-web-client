"use client";

import { changeOrderStatus, getOrderDetail, orderList } from "@/app/services/orderServices";
import { ButtonSuccessMedium } from "@/components/Button/Button";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

function OrderDetailPage({ params }: any) {
const [orderStatus, setOrderStatus] = useState<string | null>(null);
  const [orderDetailData, setOrderDetailData] = useState<
    orderList | null | undefined
  >();

  const getOrderDetailById = useCallback(async () => {
    const orderDetail = await getOrderDetail(params.id);
    setOrderDetailData(orderDetail);
  }, [params.id]);

  const changeOrderStatusHandler = useCallback( async () => {
    const response = await changeOrderStatus(params.id, { status: orderStatus })
    console.log(response)
  }, [params.id, orderStatus]);

  const handleChange = (e : any) => {
    setOrderStatus(e.target.value);
  };

  useEffect(() => {
    getOrderDetailById();
  });

  return (
    <div className="px-[4%] flex flex-col min-h-screen">
      <div className="flex flex-col my-4 gap-4">
        <h1 className="text-h6 text-success-main font-bold">Order Detail</h1>
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col gap-0.5">
            <p className="text-success-main text-paragraph font-bold ">
              Customer
            </p>
            <p className="text-typo-main text-paragraph font-bold ">
              {orderDetailData?.user.display_name}
            </p>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-success-main text-paragraph font-bold ">Date</p>
            <p className="text-typo-main text-paragraph font-bold ">
              04/04/2024{" "}
            </p>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-success-main text-paragraph font-bold ">
              Product
            </p>

            {orderDetailData?.products.map((product, index) => (
              <div key={index} className="flex gap-6 items-center p-2">
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
                  <p className="text-caption text-typo-main">Quantity : {product.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-success-main text-paragraph font-bold ">
              Total Price
            </p>
            <p className="text-typo-main text-paragraph font-bold ">Rp{orderDetailData?.total_price}</p>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-success-main text-paragraph font-bold ">
              Order Status
            </p>
            <div>
              <form>
                <select
                    onChange={handleChange}
                  name="order_status"
                  className="border-2 flex w-[100%] p-2.5 rounded-[8px]"
                >
                  <option
                    className="flex text-caption text-typo-outline1 border-[1px] p-2.5 w-full "
                    selected
                    value=""
                  >
                    (Option)
                  </option>
                  <option
                    className="flex text-caption text-typo-outline1 border-[1px] p-2.5"
                    value="waiting"
                  >
                    In the queue
                  </option>
                  <option
                    className="flex text-caption text-typo-outline1 border-[1px] p-2.5"
                    value="processed"
                  >
                    Being processed
                  </option>
                  <option
                    className="flex text-caption text-typo-outline1 border-[1px] p-2.5"
                    value="pickup"
                  >
                    Ready to pick up
                  </option>
                  <option
                    className="flex text-caption text-typo-outline1 border-[1px] p-2.5"
                    value="complete"
                  >
                    Complete
                  </option>
                </select>
              </form>
            </div>
          </div>
          <ButtonSuccessMedium text="Save changes" onClick={changeOrderStatusHandler}/>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailPage;
