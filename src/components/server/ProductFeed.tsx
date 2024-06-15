"use server";
import React from "react";
import Product from "../Product";

async function ProductFeed() {
  const res = await fetch("https://fakestoreapi.com/products");
  const productsRaw = await res.json();
  const products = productsRaw.map((product) => ({
    id: crypto.randomUUID(),
    ...product,
  }));

  return (
    <div className="w-full grid grid-flow-row-dense  grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] md:-mt-40">
      {products.slice(0, 4).map((product) => (
        <Product key={product.id} product={product} />
      ))}

      <div className="relative bg-gradient-to-r from-teal-400 to-yellow-200 h-80 w-full  col-span-full">
        <span className="">Banner</span>
      </div>

      <div className="md:col-span-2">
        {products.slice(4, 5).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      {products.slice(5).map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductFeed;
