// src/pages/index.tsx
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import TopCategories from '@/components/sections/TopCategories';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <FeaturedProducts />
      </section>

      {/* Top Categories Section */}
      <section className="py-16 bg-gray-100">
        <TopCategories />
      </section>
    </Layout>
  );
};

export default Home;

