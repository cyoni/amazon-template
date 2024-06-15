import serviceAccount from "../../../../firebase-permissions.json";
import * as admin from "firebase-admin";
import { headers } from "next/headers";
import { buffer } from "@/scripts/buffer";
import { CHECKOUT_SESSION_COMPLETED } from "@/consts/events.constants";

const stripe = require("stripe")(process.env.STRIPE_SECRET);

const fulfillOrder = async (session) => {
  await app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      status: session.status,
      products: [],
      customer_details: session.customer_details,
      shipping_details: session.shipping_details,
      amount_subtotal: session.amount_subtotal / 100,
      amount_total: session.amount_total / 100,
      currency: "USD",
      currency_symbol: "$",
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

  console.log(`order: ${session.id} has been added to db`);
};

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

export async function POST(req: Request) {
  const body = await buffer(await req.body);

  const sig = headers().get("Stripe-Signature") as string;
  const webhookSecret = process.env.STRIPE_SIGNING_SECRET;
  let event;

  try {
    if (!sig || !webhookSecret) return;
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.log(`Error message: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  console.log("event.type", event.type);
  try {
    switch (event.type) {
      case CHECKOUT_SESSION_COMPLETED:
        const session = event.data.object;
        fulfillOrder(session).catch((e) => {
          console.log("webhook error", e);
          return new Response("Webhook handler failed. View logs.", {
            status: 400,
          });
        });

      default:
        console.log("Unhandled relevant event: ", event.type);
    }
  } catch (error) {
    console.log(error);
    return new Response("Webhook handler failed. View logs.", {
      status: 400,
    });
  }

  return new Response(JSON.stringify({ received: true }));
}

//export const config = { api: { bodyParser: false } };
