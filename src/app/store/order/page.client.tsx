"use client";

import { getOrderList, orderList } from "@/app/services/orderServices";
import OrderByUserCard from "@/components/StoreComponents/OrderByUserCard";
import Link from "next/link";
import { useCallback, useState, useEffect } from "react";

export default function OrderPage() {
  const [orderListsData, setOrderListsData] = useState<
    orderList[] | null | undefined
  >([]);

  const getOrderListsData = useCallback(async () => {
    const orderLists = await getOrderList();
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
              <Link href={`/store/order/${order.id}`}>
                <OrderByUserCard {...order} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
