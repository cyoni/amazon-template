import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { IoStarSharp } from "react-icons/io5";

function Product({ product }) {
  const { title, price, description, category, image, rating } = product;
  const { rate, count } = rating;

  return (
    <div className="relative p-10 flex flex-col m-5 bg-white shadow-md">
      <Image
        className="mx-auto"
        src={image}
        alt="product"
        width={100}
        height={100}
      />

      <p className="my-3">{title}</p>
      <div className="flex text-yellow-500">
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
      </div>

      <p className="line-clamp-2	 text-xs my-2">{description}</p>

      <p className="flex-1 mb-5">${price}</p>

      <Button className="" variant={"default"}>
        Add to Basket
      </Button>
    </div>
  );
}

export default Product;
