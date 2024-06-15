"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { IoBagCheckOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

function Checkout() {
  const router = useRouter();

  const goToOrders = () => {
    router.push("/orders");
  };

  return (
    <main className="max-w-screen-md w-full mx-auto bg-white p-5">
      <section className="grid grid-cols-1 gap-5 m-5">
        <h1 className="flex text-2xl items-center max-sm:gap-2 font-semibold">
          <IoBagCheckOutline className="text-green-600 basis-10" />
          Thank you, your order has been confirmed!
        </h1>
        <p className="text-sm">
          Thank you for shopping with us. We'll send a confirmation once your
          item has shipped. If you would like to check the status of your order
          please press the link below.
        </p>
        <Button className="w-full" onClick={goToOrders}>
          Go to my orders
        </Button>
      </section>
    </main>
  );
}

export default Checkout;
