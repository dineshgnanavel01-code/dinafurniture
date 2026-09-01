import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function ProductGrid() {
  return (
    <section id="shop" className="py-20 max-w-ful mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-3xl font-serif font-bold text-stone-900">Featured Collection</h2>
        <p className="text-stone-500 max-w-md mx-auto">Explore handpicked furniture designed to bring comfort and style into your home.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}