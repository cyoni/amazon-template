"use client";
import CheckoutProduct from "@/components/CheckoutProduct";
import { Button } from "@/components/ui/button";
import {
  cartAmountSelector,
  cartSelector,
  subtotalSelector,
} from "@/selectors/general.selector";
import { isAuthenticatedSelector } from "@/selectors/user.selector";
import { useSession } from "next-auth/react";
import React from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { startCheckoutProcess } from "@/serverActions";

const stripePromise = loadStripe(String(process.env.STRIPE_API_KEY));

function Checkout() {
  const cart = useSelector(cartSelector);
  const cartAmount = useSelector(cartAmountSelector);
  const subtotal = useSelector(subtotalSelector);
  const session = useSession();

  const handleCheckout = async () => {
    const stripeSession = await startCheckoutProcess(
      cart,
      session.data?.user?.email
    );

    if (stripeSession.error) {
      console.log("checkout error", result.error);
      return;
    }

    //await fetch("/api/webhook", {method:"POST", })
  };
  return (
    <main className="lg:flex max-w-screen-xl w-full mx-auto">
      <section className="flex-1 m-5">
        <div className="h-36 bg-gradient-to-r from-blue-600 to-violet-600">
          banner
        </div>
        <div className="flex flex-col p-5 space-y-10 bg-white">
          <h1 className="text-3xl pb-4 border-b border-b-gray-200">
            Shopping Basket
          </h1>
          {cartAmount === 0 ? (
            <p className="text-xl pb-5">No products yet!</p>
          ) : (
            cart.map((product: IProduct) => (
              <CheckoutProduct key={product.id} product={product} />
            ))
          )}
        </div>
      </section>
      {cartAmount > 0 && (
        <section className="text-xl p-5 bg-white shadow-md m-5">
          <h2>
            Subtotal ({cartAmount} items): ${subtotal}
          </h2>

          <div className="mt-2">
            {session.status === "authenticated" ? (
              <Button onClick={handleCheckout} className="w-full">Checkout</Button>
            ) : (
              <Button
                role="link"
                className={`from-gray-300 to-gray-500 border-gray-200 text-gray-300 w-full`}
              >
                <span>Sign in to checkout</span>
              </Button>
            )}
          </div>
        </section>
      )}
    </main>
  );
}

export default Checkout;
