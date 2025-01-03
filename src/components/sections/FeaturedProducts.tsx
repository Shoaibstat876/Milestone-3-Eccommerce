import React, { useEffect, useState } from "react";
import ProductCard from "@/components/sections/ProductCard"; // Import ProductCard

// Define the type for a product
type Product = {
  id: number;
  image: string;
  name: string;
  price: number;
  badge?: string;
  originalPrice?: number;
  priceStyle: string;
  nameStyle: string;
  cartColor: string;
  iconColor: string;
};

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]); // Set the state type to Product[]
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product data from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
