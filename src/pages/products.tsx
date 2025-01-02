import React, { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/sections/ProductCard";
import { useRouter } from "next/router";

const products = [
  {
    id: 1,
    image: "/assets/images/tablet2.png",
    name: "Astro Robot",
    price: 1577,  // Change price to a number
    badge: "New",
    nameStyle: "text-lg font-[400] text-[#007580]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#029fae] hover:bg-teal-700",
    iconColor: "text-white",
    category: "tablet",
  },
  {
    id: 2,
    image: "/assets/images/headphones-1.png",
    name: "HeadPhones",
    price: 150,  // Change price to a number
    originalPrice: 30,  // Change originalPrice to a number
    priceStyle: "text-black font-medium",
    nameStyle: "text-lg font-medium",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
    category: "headphones",
  },
  {
    id: 3,
    image: "/assets/images/laptop-1.png",
    name: "Laptop",
    price: 200,  // Change price to a number
    nameStyle: "text-lg font-[400] text-[#000000]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
    category: "laptop",
  },
  {
    id: 4,
    image: "/assets/images/laptop2.png",
    name: "Laptop",
    price: 300,  // Change price to a number
    nameStyle: "text-lg font-[400] text-[#000000]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
    category: "laptop",
  },
  {
    id: 5,
    image: "/assets/images/musicplayer.png",
    name: "Musicplayer",
    price: 20,  // Change price to a number
    badge: "New",
    priceStyle: "text-black font-medium",
    nameStyle: "text-lg font-medium",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
    category: "music",
  },
  {
    id: 6,
    image: "/assets/images/printer-1.png",
    name: "Printer",
    price: 40,  // Change price to a number
    badge: "Sale",
    originalPrice: 30,  // Change originalPrice to a number
    priceStyle: "text-black font-medium",
    nameStyle: "text-lg font-medium",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
    category: "printer",
  },
  {
    id: 7,
    image: "/assets/images/ps5-2.png",
    name: "PS-5",
    price: 180,  // Change price to a number
    nameStyle: "text-lg font-[400] text-[#000000]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
    category: "gaming",
  },
  {
    id: 8,
    image: "/assets/images/speaker.png",
    name: "Speaker",
    price: 20,  // Change price to a number
    nameStyle: "text-lg font-[400] text-[#000000]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
    category: "audio",
  },
  {
    id: 9,
    image: "/assets/images/smartwatch-1.png",
    name: "Smartwatch",
    price: 20,  // Change price to a number
    badge: "New",
    nameStyle: "text-lg font-[400] text-[#007580]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#029fae] hover:bg-teal-700",
    iconColor: "text-white",
    category: "wearables",
  },
  {
    id: 10,
    image: "/assets/images/tablet.png",
    name: "Tablet",
    price: 20,  // Change price to a number
    badge: "Sale",
    originalPrice: 30,  // Change originalPrice to a number
    priceStyle: "text-black font-medium",
    nameStyle: "text-lg font-medium",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
    category: "tablet",
  },
  {
    id: 11,
    image: "/assets/images/vrheadset.png",
    name: "Vr Head Set",
    price: 20,  // Change price to a number
    nameStyle: "text-lg font-[400] text-[#000000]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
    category: "gaming",
  },
  {
    id: 12,
    image: "/assets/images/techno.png",
    name: "Techno Max",
    price: 20,  // Change price to a number
    nameStyle: "text-lg font-[400] text-[#000000]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
    category: "electronics",
  },
];

const ProductPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    if (category) {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [category]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <Layout>
      {/* Products Section */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">All Products</h1>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Subscribe to Our Newsletter
          </h2>
          <form className="flex items-center justify-center" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email..."
              className="px-4 py-2 w-full max-w-sm border rounded-l focus:outline-none"
              aria-label="Email Address"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-teal-500 text-white rounded-r hover:bg-teal-600"
            >
              Submit
            </button>
          </form>
          {isSubmitted && (
            <p className="mt-4 text-xs text-teal-500">Email submitted successfully!</p>
          )}
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Follow Products And Discounts On Instagram
          </h2>
          <div className="flex justify-center flex-wrap gap-4">
            {filteredProducts
              .slice(0, 6) // Limit the number of images to 6
              .map((product) => (
                <div key={product.id} className="relative w-32 h-32">
                  <Image
                    src={product.image}
                    alt={`Instagram post of ${product.name}`}
                    layout="fill"
                    className="rounded-md object-cover"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductPage;
