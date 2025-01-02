// src/pages/cart.tsx

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, calculateTotal } = useCart();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCheckout = () => {
    // Simulate checkout process
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {isSubmitted ? (
        <p className="text-xl text-green-500">Thank you for your order!</p>
      ) : (
        <>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id} className="flex justify-between mb-4">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover"
                      />
                      <div className="ml-4">
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>

              {/* Display total price */}
              <div className="mt-4">
                <p className="text-lg font-bold">Total: ${calculateTotal()}</p>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="mt-6 px-6 py-2 bg-teal-500 text-white rounded"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
