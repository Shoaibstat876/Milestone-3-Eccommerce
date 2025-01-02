import React from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { FaShippingFast, FaCheckCircle, FaHeadset } from "react-icons/fa";
import Link from "next/link";

const features = [
  {
    icon: <FaShippingFast />,
    title: "Fast Delivery for Electronics",
    description: "Order today and receive your electronics as fast as next day.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Latest Technology",
    description: "We offer the most up-to-date electronics, keeping you ahead of the curve.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Tech Support",
    description: "Our experts are available around the clock to help you with your electronics.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="48"
        height="48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-teal-500"
      >
        <rect
          x="3"
          y="6"
          width="18"
          height="12"
          rx="2"
          ry="2"
          fill="#14B8A6"
        ></rect>
        <rect x="3" y="10" width="18" height="2" fill="#FFFFFF"></rect>
        <line x1="7" y1="15" x2="11" y2="15" stroke="#FFFFFF" strokeWidth="2" />
        <line x1="15" y1="15" x2="17" y2="15" stroke="#FFFFFF" strokeWidth="2" />
      </svg>
    ),
    title: "Best Prices on Electronics",
    description: "Find the best prices for premium electronics without compromising quality.",
  },
];

const products = [
  { id: 1, image: "/assets/images/techno.png", name: "TechPro X Phone", price: "$799.00" },
  { id: 2, image: "/assets/images/vrheadset.png", name: "Vr Head-Set", price: "$500.00" },
  { id: 3, image: "/assets/images/astro.png", name: "Astro Robot", price: "$1299.00" },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="bg-teal-700 text-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-transform">
            <h1 className="text-2xl font-bold mb-4">About Us - Tech Hive</h1>
            <p>
              At Tech Hive, we are passionate about bringing you the best in electronics. Whether you're
              looking for the latest smartphone, a powerful laptop, or cutting-edge accessories, we have it
              all. We specialize in offering top-quality products at unbeatable prices with fast, reliable
              delivery and expert support.
            </p>
            <Link href="/products" passHref>
              <button className="mt-6 px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition">
                Explore Our Collection
              </button>
            </Link>
          </div>

          {/* Right Column */}
          <div>
            <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto hover:scale-105 transition-transform duration-300">
              <Image
                src="/assets/images/laptop2.png"
                alt="About Us"
                className="rounded-lg shadow-lg object-cover"
                width={800}
                height={600}
                sizes="(max-width: 640px) 100vw, 
                       (max-width: 768px) 80vw,
                       (max-width: 1024px) 70vw,
                       60vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">What Makes Us Different</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border p-6 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-transform"
              >
                <div className="text-4xl text-teal-500 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-800">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Our Popular Electronics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link key={product.id} href="/products" passHref>
                <div className="border rounded-lg p-4 shadow hover:shadow-lg hover:scale-105 transition-transform">
                  <div className="relative w-full h-48 sm:h-56 lg:h-60">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="intrinsic"
                      width={500}
                      height={500}
                      className="rounded-md"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 mt-2">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
