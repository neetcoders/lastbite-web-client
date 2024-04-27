import Image from "next/image";
import React from "react";

export type IStore = {
  id: string;
  display_name: string;
}

export type IUser = {
  email: string;
  display_name: string;
}

export type IProduct = {
  id: string;
  selected: boolean;
  quantity: number;
  display_name: string;
  price_before: number;
  price_after: number;
  stock: number;
  image_url: string;
}

export type IOrder = {
  id: string;
  status: string;
  store: IStore;
  user: IUser;
  products: IProduct[];
  total_price: number;
}

function OrderCard(order: IOrder) {
  let statusMessage = "";

  if (order.status === "waiting") {
    statusMessage = "in the queue";
  } else if (order.status === "processed") {
    statusMessage = "being processed"
  } else if (order.status === "ready") {
    statusMessage = "ready to picked up";
  } else if (order.status === "done") {
    statusMessage = "completed";
  } else if (order.status === "cancelled") {
    statusMessage = "cancelled";
  } else if (order.status === "rejected") {
    statusMessage == "rejected";
  }

  return (
    <div className="flex flex-col gap-4 text-h1">
      <h1 className="text-paragraph font-semibold text-typo-main">
        {order.store.display_name}
      </h1>

      <div className="flex flex-col gap-2.5 px-2.5 py-3 border-[1px] border-typo-main rounded-[10px]">
        <div className="text-caption text-typo-main font-semibold flex justify-end">
          04/04/2024
        </div>

        {order.products.map((product, index) => (
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
              <p className="flex gap-2">
                <span className="text-caption font-semibold text-success-main">
                  Rp{product.price_after}
                </span>
                <span className="text-caption line-through text-typo-main">
                Rp{product.price_before}
                </span>
              </p>
              <p className="text-caption text-typo-main">Quantity : {product.quantity}</p>
            </div>
          </div>
        ))}

          <div className="flex items-center justify-end font-semibold text-caption text-typo-main">Total : Rp{order.total_price}</div>
        <div className="flex items-center justify-start font-bold text-bodytext text-success-main p-2">Your order is {statusMessage}</div>

      </div>
    </div>
  );
}

export default OrderCard;