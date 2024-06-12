"use client"
import CheckoutProduct from "@/components/CheckoutProduct"
import { cartSelector } from "@/selectors/general.selector"
import React from "react"
import { useSelector } from "react-redux"

function Checkout() {
  const cart = useSelector(cartSelector)

  return (
    <main className="lg:flex max-w-2xl w-full mx-auto">
      <section className="flex-1 m-5">
        <div className="h-36 bg-gradient-to-r from-blue-600 to-violet-600">
          banner
        </div>
        <div className="flex flex-col p-5 space-y-10 bg-white">
          <h1 className="text-3xl border-b pb-4">Shopping Basket</h1>
        </div>

        {cart.map((product: IProduct) => (
          <CheckoutProduct
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
          />
        ))}
      </section>
      <section>hello@</section>
    </main>
  )
}

export default Checkout
