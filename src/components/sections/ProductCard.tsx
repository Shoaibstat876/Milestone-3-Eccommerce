import Image from "next/image";

import { useCart } from "@/context/CartContext";
import { PiShoppingCartSimpleLight } from "react-icons/pi"; // Import the cart icon

interface Product {
  id: number;
  name: string;
  price: number; // Price should be a number
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, cartItems } = useCart(); // Get cart items to display count

  return (
    <div className="p-4 bg-white shadow-md rounded">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="rounded-md"
      />
      <h3 className="text-lg font-bold mt-2">{product.name}</h3>
      <p className="text-gray-700">${product.price}</p>

      {/* Cart Icon with Item Count */}
      <div className="relative mt-4">
        <button
          onClick={() => addToCart(product)}
          className="bg-gray-200 px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-teal-500 hover:text-white transition-colors duration-200"
        >
          <PiShoppingCartSimpleLight className="text-2xl" />
          <span className="bg-teal-500 text-white text-xs font-bold rounded-full px-2 py-1">
            {cartItems.length} {/* Show the total count of items in the cart */}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

