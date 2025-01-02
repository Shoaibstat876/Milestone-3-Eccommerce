import Image from "next/image";
import { useRouter } from "next/router";
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

  // Get the count of this specific product in the cart
  const productInCart = cartItems.filter(item => item.id === product.id);
  const productCount = productInCart.length;

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center justify-between transition-all duration-300 ease-in-out hover:shadow-xl">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="rounded-md object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{product.name}</h3>
      <p className="text-xl font-bold text-gray-700 mb-4">${product.price}</p>

      {/* Cart Button with Icon and Item Count */}
      <button
        onClick={() => addToCart(product)} // This adds the product to the cart
        className="relative bg-teal-500 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-teal-600 transition-all duration-200 ease-in-out"
      >
        <PiShoppingCartSimpleLight className="text-2xl" />
        {productCount > 0 && (
          <span className="absolute top-0 right-0 bg-teal-700 text-white text-xs font-bold rounded-full px-2 py-1 transform translate-x-1/4 translate-y-1/4">
            {productCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default ProductCard;
