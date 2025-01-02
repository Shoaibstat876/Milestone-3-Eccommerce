import React from "react";
import Image from "next/image";
import Link from "next/link"; // Add Link for navigation

const HeroSection = () => {
  return (
    <section className="bg-white py-16">
      {/* Main Section */}
      <div className="container mx-auto max-w-screen-lg flex flex-col-reverse lg:flex-row items-center">
        {/* Text Content */}
        <header className="lg:w-1/2 text-center lg:text-left px-6">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Welcome to Tech Hive
          </p>
          <h1 className="text-4xl font-extrabold text-gray-800 leading-tight">
            Premium Electronics for Your Lifestyle
          </h1>
          <p className="mt-4 text-gray-600">
            Explore our top-of-the-line electronics, from gadgets to home appliances, designed to enhance your everyday life.
          </p>

          {/* Shop Now Button with Link */}
          <Link href="/products">
            <button
              className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition-all"
              aria-label="Shop Now and Explore our Electronics"
            >
              Shop Now <span className="ml-2">→</span>
            </button>
          </Link>
        </header>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/assets/images/electronics-hero-image.png" // Update to a relevant electronics image
            alt="Latest electronic gadgets and devices"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
