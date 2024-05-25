import express from "express";
import Stripe from "stripe";

const stripe = Stripe(process.env.STRIPE_SECRET);

const router = express.Router();

// checkout api
router.post("/create-checkout-session", async (req, res) => {
  try {
    // console.log(`My API keyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy`);
    // console.log(process.env.STRIPE_SECRET);
    const { products } = req.body;
    console.log(products);

    const lineItems = products.map((product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.title,
          images: [product.photo],
        },
        unit_amount: product.price * 100,
      },
      quantity: product.cartQuantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/sucess",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.log(error);
    res.json({
      error,
    });
  }
});

export default router;
