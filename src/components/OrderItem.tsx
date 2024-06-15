"use client";
import React from "react";

function OrderItem({ order }) {
  return (
    <div className="flex space-x-10 p-5 items-center text-gray-600 bg-gray-100 ">
      <div className="text-sm">
        <div className="font-semibold ">Order placed</div>
        <div>{order.timestamp}</div>
      </div>

      <div className="flex-1 text-sm">
        <div className="font-semibold ">Total</div>
        <div>{order.amountTotal}</div>
      </div>

      <div className="text-sm">
        <div>{order.items.data.length} items</div>
      </div>
    </div>
  );
}

export default OrderItem;
