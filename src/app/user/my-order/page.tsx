"use client";

import { useCallback, useState, useEffect } from "react";
import { getOrderUserList } from "@/app/services/orderUserService";
import OrderCard from "@/components/BuyerProfilePage/OrderCard";
import { IOrder } from "@/app/services/orderUserService";

function OrderPage() {
  const [orderListsData, setOrderListsData] = useState<
    IOrder[] | null | undefined
  >([]);

  const getOrderListsData = useCallback(async () => {
    const orderLists = await getOrderUserList();
    setOrderListsData(orderLists);
  }, [orderListsData]);

  useEffect(() => {
    getOrderListsData();
  });

  return (
    <div className="px-[4%] flex flex-col min-h-screen">
      <div className="flex flex-col my-4 gap-4">
        <h1 className="text-h6 text-success-main font-bold">Order</h1>
        <div className="flex flex-col gap-5">
          {orderListsData?.map((order, index) => (
            <div key={index}>
              <OrderCard {...order} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
