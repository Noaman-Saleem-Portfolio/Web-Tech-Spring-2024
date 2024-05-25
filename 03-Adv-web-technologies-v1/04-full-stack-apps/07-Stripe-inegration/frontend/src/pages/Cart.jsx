import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowRight } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../store/cartSlice";
import { ImCross } from "react-icons/im";
import PayButton from "../components/PayButton";

const Cart = () => {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.user.auth);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto">
      {cart.cartItems.length === 0 ? (
        <>
          <p className="py-8">Your cart is currently empty</p>
          <div
            onClick={() => navigate("/books")}
            className="border inline-block hover:bg-slate-400"
          >
            <p className="inline-block  p-2">Continue Shopping</p>
            <FaArrowRight className="inline-block mr-2" />
          </div>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold my-5 text-center">Shopping Cart</h1>
          <div className="headings flex ">
            <p className="basis-[25%]">Product</p>
            <p className="basis-[25%] text-center">Price</p>
            <p className="basis-[25%] text-center">Quantity</p>
            <p className="basis-[25%] text-end">Total</p>
          </div>
          <hr />
          {cart.cartItems &&
            cart.cartItems.map((cartItem) => {
              return (
                <div key={cartItem._id}>
                  <div className="cartItem flex ">
                    <div className="product flex gap-5 my-3 basis-[25%]">
                      <img
                        className="w-[200px]"
                        src={`${import.meta.env.VITE_SERVER_IMAGES}/${
                          cartItem.photo
                        }`}
                        alt="image"
                      />
                      <div>
                        <p className="font-bold">{cartItem.title}</p>
                        <p
                          onClick={() => handleRemoveFromCart(cartItem)}
                          className="text-[14px] text-gray-600 hover:bg-gray-400 inline"
                        >
                          Remove
                        </p>
                      </div>
                    </div>
                    <div className="price basis-[25%]  flex justify-center items-center">
                      {cartItem.price}
                    </div>
                    <div className="quantity basis-[25%] flex justify-center items-center">
                      <div className="border p-[12px] px-[30px] flex gap-x-6">
                        <button onClick={() => handleDecreaseCart(cartItem)}>
                          -
                        </button>
                        <span>{cartItem.cartQuantity}</span>
                        <button onClick={() => handleAddToCart(cartItem)}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="total basis-[25%] flex justify-end items-center">
                      {cartItem.cartQuantity * cartItem.price}
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}

          {/* Sub total */}
          <div className="flex justify-between">
            <div className="border inline-block hover:bg-slate-400 my-6">
              <p
                className="inline-block  p-2"
                onClick={() => handleClearCart()}
              >
                Clear Cart
              </p>
              <ImCross className="inline-block mr-2" />
            </div>

            <div className="subTotal flex justify-between basis-[20%] my-6 items-center">
              <p className="text-2xl font-bold">Subtotal</p>
              <p>{cart.cartTotalAmount}</p>
            </div>
          </div>
          {isAuthenticated ? (
            <PayButton cartItems={cart.cartItems} />
          ) : (
            <button
              className="bg-blue-800 text-white p-4 py-2 ml-auto block w-[270px] hover:bg-blue-900"
              onClick={() =>
                navigate("/login", {
                  state: { redirectUrl: location.pathname },
                })
              }
            >
              Login to Check out
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
