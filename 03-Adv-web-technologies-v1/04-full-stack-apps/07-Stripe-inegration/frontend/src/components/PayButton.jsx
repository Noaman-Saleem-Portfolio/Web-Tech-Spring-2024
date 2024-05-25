import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

const PayButton = ({ cartItems }) => {
  const userId = useSelector((state) => state.user._id);

  // payment integration
  const handlePayment = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER}/create-checkout-session`,
        {
          cartItems,
          userId,
        }
      );
      console.log(response);
      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.log(`OH NO ERROR`);
      console.log(error);
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-blue-800 text-white p-4 py-2 ml-auto block w-[270px] hover:bg-blue-900"
    >
      Check out
    </button>
  );
};

export default PayButton;
