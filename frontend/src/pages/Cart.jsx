import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/CartContextProvider";
import SingleCart from "../components/Cart/SingleCart";

const Cart = () => {
  const { cartItems, clearCart } = useShoppingCart();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let price = 0;
    cartItems.map((product) => {
      price += product.quantity * product.price;
    });
    setTotalPrice((prev) => price);
  }, [cartItems]);
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">
                Shopping Cart{" "}
                <span
                  className="px-4 py-2 bg-red-500 cursor-pointer text-xs
               text-white mx-10 hover:bg-red-400"
                  onClick={() => clearCart()}
                >
                  Clear All
                </span>{" "}
              </h1>
              <h2 className="font-semibold text-2xl">
                {cartItems.length} Items
              </h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>

            {cartItems.length == 0 && (
              <h2 className="text-center my-10">
                Nothing Here, Add items to cart!
              </h2>
            )}
            {cartItems?.map((item, index) => (
              <SingleCart item={item} key={index + 1} />
            ))}

            <Link
              to="/"
              className="flex font-semibold text-yellow-600 text-sm mt-10 items-center"
            >
              <FaArrowLeft className="fill-current mr-2 text-yellow-600 w-4" />
              Continue Shopping
            </Link>
          </div>

          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className=" mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${totalPrice}</span>
              </div>
              <button className="bg-yellow-500 font-semibold hover:bg-yellow-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
