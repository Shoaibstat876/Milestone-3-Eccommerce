// src/pages/_app.tsx

import { AppProps } from "next/app";
import { CartProvider } from "@/context/CartContext";
import "../styles/globals.css";
import FloatingCartButton from "@/components/sections/FloatingCartButton";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
      <FloatingCartButton /> {/* Move this inside CartProvider */}
    </CartProvider>
  );
}

export default MyApp;
