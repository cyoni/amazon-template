"use server";
import React from "react";
import { auth } from "../../../auth";
import { db } from "../../../firebase";
import moment from "moment";
import Image from "next/image";
import OrderItem from "../OrderItem";

async function OrdersFeed() {
  const session = await auth();
  const stripe = require("stripe")(process.env.STRIPE_SECRET);

  const snapshot = await db
    .collection(`users/${session!.user!.email}/orders`)
    .orderBy("timestamp", "desc")
    .get();
  let orders = [];

  const snapShops = snapshot.docs;
  for (const s of snapShops) {
    const order = s.data();
    orders.push({
      id: s.id,
      images: order.images,
      timestamp: moment(order.timestamp.toDate()).unix(),
      amountTotal: order.amount_total,
      items: await stripe.checkout.sessions.listLineItems(s.id, { limit: 100 }),
    });
  }

  return (
    <div>
      <div className="mt-2 text-sm mb-3">{orders.length} orders</div>

      {orders.map((order) => {
        return (
          <div key={order.id} className="rounded-sm border relative">
            <OrderItem order={order} />

            <div className="p-5 flex overflow-x-auto space-x-5">
              {order.images.map((image: string, i: number) => (
                <Image key={i} src={image} height={100} width={100} alt="img" />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OrdersFeed;
