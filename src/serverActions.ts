"use server";

import { auth, signIn } from "../auth";
import { redirect } from "next/navigation";
import { USER_NOT_AUTH_CODE } from "./consts/code.consts";

export const signInAction = async () => {
  await signIn();
};

export const startCheckoutProcess = async (products: IProduct[], email) => {
  let session;
  try {
    const authSession = await auth();
    if (!authSession) {
      return {
        code: USER_NOT_AUTH_CODE,
        error: { message: "user is not authenticated" },
      };
    }

    const stripe = require("stripe")(process.env.STRIPE_SECRET);

    const transformedItems = products.map((product) => ({
      quantity: 1,
      price_data: {
        currency: "usd",
        unit_amount: product.price * 100,
        product_data: {
          name: product.title,
          description: product.description,
          images: [product.image],
        },
      },
    }));

    session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["IL", "US"],
      },
      line_items: transformedItems,
      mode: "payment",
      success_url: `${process.env.PUBLIC_URL}/success`,
      cancel_url: `${process.env.PUBLIC_URL}/checkout`,
      metadata: {
        email,
        images: JSON.stringify(products.map((x) => x.image)),
      },
    });
    console.log("redirect", session.url);
  } catch (err) {
    console.error("serverActions", err);
    return { error: err.message };
  }

  redirect(session.url);
};
