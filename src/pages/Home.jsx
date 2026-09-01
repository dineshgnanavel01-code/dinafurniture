import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import ProductGrid from '../components/ProductGrid';
import OfferSection from '../components/OfferSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <CategorySection />
      <ProductGrid />
      <OfferSection />
    </main>
  );
}