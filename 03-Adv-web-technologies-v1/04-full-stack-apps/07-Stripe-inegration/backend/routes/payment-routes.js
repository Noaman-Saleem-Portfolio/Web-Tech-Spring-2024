import express from "express";

import Stripe from "stripe";
import { TryCatch } from "../middlewares/error.js";

const stripe = Stripe(
  "sk_test_51PJc0g2KCzt9Ww7kpyydIEaxVwidOyojW9gNlFdltPkFcwTveAlJTFroE9MhQXfNR2R7kfKeKWsbEv0PpwBMs5Ui00OAYiWu2p"
);

const YOUR_DOMAIN = "http://localhost:5173";

const router = express.Router();

router.route("/create-checkout-session").post(
  TryCatch(async (req, res, next) => {
    // const customer = await stripe.customers.create({
    //   metadata: {
    //     userId: req.body.userId,
    //     cart: JSON.stringify(req.body.cartItems),
    //   },
    // });

    const line_items = req.body.cartItems.map((item) => {
      // console.log(item);
      // let photoUrl = `http://localhost:8000/${item.photo}`;
      // console.log(photoUrl);
      return {
        price_data: {
          currency: "pkr",
          product_data: {
            name: item.title,
            // images: [photoUrl],
            // description: item.description,
            metadata: {
              id: item._id,
            },
          },
          unit_amount: item.price * 100,
        },
        quantity: item.cartQuantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "KE", "PK"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0,
              currency: "pkr",
            },
            display_name: "Free shipping",
            // Delivers between 5-7 business days
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 5,
              },
              maximum: {
                unit: "business_day",
                value: 7,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 1500,
              currency: "pkr",
            },
            display_name: "Next day air",
            // Delivers in exactly 1 business day
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 1,
              },
              maximum: {
                unit: "business_day",
                value: 1,
              },
            },
          },
        },
      ],
      phone_number_collection: {
        enabled: true,
      },
      line_items,
      mode: "payment",
      // customer: customer.id,
      success_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}/cancel`,
    });

    // res.redirect(303, session.url);
    res.send({ url: session.url });
  })
);

// checkout api

export default router;
