import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const PayButton = ({ cartItems }) => {
  // payment integration
  const makePayment = async () => {
    const stripe = await loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

    const body = {
      products: cartItems,
    };
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + `${import.meta.env.VITE_PUBLISHABLE_KEY}`
    };
    const response = await fetch(
      `${import.meta.env.VITE_SERVER}create-checkout-session`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <button onClick={makePayment} className="bg-blue-800 text-white p-4 py-2 ml-auto block w-[270px] hover:bg-blue-900">
      Check out
    </button>
  );
};

export default PayButton;
