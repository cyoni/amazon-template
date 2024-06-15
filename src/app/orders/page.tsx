"use server";

import React, { Suspense } from "react";
import OrdersFeed from "@/components/server/OrdersFeed";
import Spinner from "@/components/ui/spinner";

function Checkout() {
  return (
    <main className="max-w-screen-md w-full mx-auto bg-white p-5 ">
      <h1 className="text-2xl border-b border-b-yellow-500 pb-1">
        Your Orders
      </h1>

      <Suspense
        fallback={
          <div className="mx-auto w-[100px] my-40">
            <Spinner />
          </div>
        }
      >
        <OrdersFeed />
      </Suspense>
    </main>
  );
}

export default Checkout;
