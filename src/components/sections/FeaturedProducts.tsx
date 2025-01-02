import React from "react";
import ProductCard from "@/components/sections/ProductCard"; // Import ProductCard

// Sample product data for electronics
const products = [
  {
    id: 1,
    image: "/assets/images/laptop-1.png",
    name: "Gaming Laptop",
    price: "$1200",
    badge: "New",
    priceStyle: "text-black font-medium",
    nameStyle: "text-lg font-medium text-[#007580]",
    cartColor: "bg-[#029fae] hover:bg-teal-700",
    iconColor: "text-white",
  },
  {
    id: 2,
    image: "/assets/images/headphones-1.png",
    name: "Wireless Headphones",
    price: "$150",
    badge: "Sale",
    originalPrice: "$200",
    priceStyle: "text-black font-medium",
    nameStyle: "text-lg font-medium",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
  },
  {
    id: 3,
    image: "/assets/images/smartwatch-1.png",
    name: "Smartwatch",
    price: "$250",
    priceStyle: "text-black font-medium",
    nameStyle: "text-lg font-medium",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
  },
  {
    id: 4,
    image: "/assets/images/printer-1.png",
    name: "Printer",
    price: "$100",
    priceStyle: "text-black font-medium",
    nameStyle: "text-lg font-medium",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Featured Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
