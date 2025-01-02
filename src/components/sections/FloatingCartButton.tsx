// src/components/FloatingCartButton.tsx

import React from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/router";

const FloatingCartButton = () => {
  const { cartItems } = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push("/cart"); // Navigate to the cart page
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 bg-teal-500 text-white p-4 rounded-full shadow-lg cursor-pointer flex items-center justify-center z-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 md:w-8 md:h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3h18v18H3V3z"
        />
      </svg>
      {cartItems.length > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs md:text-sm rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
          {cartItems.length}
        </span>
      )}
    </div>
  );
};

export default FloatingCartButton;
