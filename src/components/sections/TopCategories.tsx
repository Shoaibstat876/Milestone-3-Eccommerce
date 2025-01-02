import React from "react";
import Image from "next/image";

// Array of category data
const categories = [
  {
    id: 1,
    image: "/assets/images/smartledtv.png",
    name: "Smart Led Tv",
    products: "3,648 Products",
    badge: "New",
  },
  {
    id: 2,
    image: "/assets/images/ps5.png",
    name: "Playstation 5",
    products: "157 Products",
    badge: "Best Seller",
  },
  {
    id: 3,
    image: "/assets/images/tablet.png",
    name: "Tablet",
    products: "154 Products",
    badge: "Sale",
  },
];

const TopCategories: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-left">
          Top Categories
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              aria-label={`Category: ${category.name} with ${category.products}`}
              className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 hover:cursor-pointer"
            >
              {/* Category Image */}
              <Image
                src={category.image}
                alt={category.name}
                width={350}
                height={250}
                className="object-cover w-full h-auto md:w-64 md:h-48 lg:w-80 lg:h-56 transition-all transform hover:blur-sm"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-6 transition-all ease-in-out duration-300 hover:bg-opacity-80 opacity-0 hover:opacity-100">
                <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
                <p className="text-sm text-gray-300">{category.products}</p>
              </div>

              {/* Optional Badge (e.g., Best Seller, New) */}
              <div className={`absolute top-2 left-2 text-xs px-3 py-1 rounded-full shadow-md ${category.badge === 'New' ? 'bg-teal-500' : 'bg-yellow-500'} text-white`}>
                {category.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
