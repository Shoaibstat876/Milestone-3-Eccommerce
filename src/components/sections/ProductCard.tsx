import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

export interface Product {
  id: number;
  name: string;
  price: string; // price as string
  image: string;
  badge?: string;
  originalPrice?: string;
  priceStyle?: string;
  nameStyle?: string;
  cartColor?: string;
  iconColor?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, cartItems } = useCart();

  const handleAddToCart = () => {
    // Convert price to number
    const updatedProduct = {
      ...product,
      price: parseFloat(product.price.replace(/[^0-9.-]+/g, "")), // Convert price string to number
    };

    addToCart(updatedProduct); // Pass updated product with price as number
  };

  return (
    <div className="p-4 bg-white shadow-md rounded">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="rounded-md"
        />
        {product.badge && (
          <span className="absolute top-2 right-2 bg-teal-500 text-white px-2 py-1 rounded-md text-sm">
            {product.badge}
          </span>
        )}
      </div>
      <h3 className={product.nameStyle || "text-lg font-bold mt-2"}>{product.name}</h3>
      <div className="flex items-center gap-2">
        <p className={product.priceStyle || "text-gray-700"}>{product.price}</p>
        {product.originalPrice && (
          <p className="text-gray-400 line-through">{product.originalPrice}</p>
        )}
      </div>

      <div className="relative mt-4">
        <button
          onClick={handleAddToCart} // Call the function that adds the product to the cart
          className={`px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer transition-colors duration-200 ${
            product.cartColor || "bg-gray-200 hover:bg-teal-500 hover:text-white"
          }`}
        >
          <PiShoppingCartSimpleLight className={`text-2xl ${product.iconColor || ""}`} />
          <span className="bg-teal-500 text-white text-xs font-bold rounded-full px-2 py-1">
            {cartItems.length}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
