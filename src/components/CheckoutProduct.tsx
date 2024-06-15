"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { removeFromCartAction } from "@/actions/general.actions";

function CheckoutProduct({ product }) {
  const { id, title, price, description, category, image, rating } = product;

  const dispatch = useDispatch();

  const removeFromBasket = () => {
    dispatch(removeFromCartAction(id));
  };
  return (
    <div className="grid grid-cols-5 py-5 border-b">
      <Image
        src={image}
        width={100}
        height={100}
        alt={"product"}
      />

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">*****</div>
        <p className="line-clamp-3 my-2 text-xs">{description}</p>
        <p>${price}</p>
      </div>

      <div className="flex flex-col justify-center space-y-2">
        <Button variant={"default"}>Add to Basket</Button>
        <Button variant={"default"} onClick={removeFromBasket}>
          Remove from Basket
        </Button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
