// src/components/FloatingCartButton.tsx

import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/router";
import { PiShoppingCartSimpleLight } from "react-icons/pi"; // Cart icon from react-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesome icon
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons"; // Specific door open icon

const FloatingCartButton = () => {
  const { cartItems } = useCart();
  const router = useRouter();
  const [isOnCartPage, setIsOnCartPage] = useState(false);

  useEffect(() => {
    // Check if the current page is the cart page
    setIsOnCartPage(router.pathname === "/cart");
  }, [router.pathname]);

  const handleClick = () => {
    if (isOnCartPage) {
      router.push("/"); // Redirect to home if on cart page
    } else {
      router.push("/cart"); // Navigate to the cart page
    }
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 bg-teal-500 text-white p-4 rounded-full shadow-lg cursor-pointer flex items-center justify-center z-50 transform transition-all hover:scale-110"
    >
      {/* If the user is on the cart page, show the open door icon */}
      {isOnCartPage ? (
        <FontAwesomeIcon
          icon={faDoorOpen} // Door open icon from FontAwesome (solid icon)
          className="w-6 h-6 md:w-8 md:h-8 transform transition-all"
        />
      ) : (
        // If the user is not on the cart page, show the cart icon
        <PiShoppingCartSimpleLight
          className="w-6 h-6 md:w-8 md:h-8 transform transition-all"
        />
      )}

      {/* Display the number of items in the cart */}
      {cartItems.length > 0 && !isOnCartPage && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs md:text-sm rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
          {cartItems.length}
        </span>
      )}
    </div>
  );
};

export default FloatingCartButton;
